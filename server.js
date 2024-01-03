require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Log = require('./models/log')
const PORT = process.env.PORT || 3000

const app = express()

// middleware
app.use(express.urlencoded( {extended: true} )) // to send html files on serverside rendered website

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// db
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', ()=> {
    console.log(`Connected to the database...`)
})

// Routes

// Index
app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        console.log(foundLogs)
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (err) {
        console.log(`error: ${err.message}`)
    }
})


// New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

// Delete
app.delete('/logs/:id', async (req, res) => {
    try {
        await mongoose.findOneAndDelete({_id: req.params.id})
            .then(() => {
                res.redirect('/logs')
            })
    } catch (err) {
        console.log(`error: ${err.message}`)
    }
})

// Update

// Create
app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const createdLog = await Log.create(req.body)
        // res.send(`Woah that was weird.`)
        console.log(createdLog._id)
        res.redirect(`/logs/${createdLog._id}`)
    } catch (err) {
        res.status(400).send(`error: ${err.message}`)
    }
})

// Edit

// Show
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('logs/Show', {
            log: foundLog
        })

    } catch (err) {
        console.log(`error: ${err.message}`)
    }
})

app.listen(PORT, ()=> {
    console.log(`running on PORT ${PORT}...`)
})