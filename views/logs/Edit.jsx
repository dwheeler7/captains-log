const React = require('react')

function Edit (props) {
    return (
        <div>
            <h1>{props.log.title} Edit Page</h1>
            <a href='/logs'>Go back to All Logs</a>
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={props.log.title} /><br/>
                Entry: <input type="textarea" name="entry" defaultValue={props.log.entry}/><br/>
                Is the ship broken? {props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit