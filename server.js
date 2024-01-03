require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const PORT = process.env.PORT || 3000

const app = express()

// middleware
app.use(express.urlencoded( {extended: true} )) // to send html files on serverside rendered website

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// Routes

// Index

// New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

// Delete

// Update

// Create

// Edit

// Show

app.listen(PORT, ()=> {
    console.log(`running on PORT ${PORT}...`)
})