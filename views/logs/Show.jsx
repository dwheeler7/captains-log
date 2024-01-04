const React = require('react')

function Show (props) {
    return (
        <div>            
            <h1>{props.log.title}</h1>    
            <a href='/logs'>Go back to All Logs</a>        
            <p>The log reads, "{props.log.entry} and {props.log.shipIsBroken? 'The ship is broken.' : `The ship isn't broken.`}</p>
            <p><a href={`/logs/${props.log._id}/edit`}>Edit this log.</a></p>
        </div>
    )    
}

module.exports = Show