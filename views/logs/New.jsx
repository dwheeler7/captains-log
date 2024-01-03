const React = require('react')

function New (props) {
    return (
        <div>
            <h1>Captain's Log</h1>
            <form action="/logs" method="POST"><br/>
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="textarea" name="entry" /><br/>
                Is the ship broken? <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Log" />
            </form>
        </div>
    )
}

module.exports = New