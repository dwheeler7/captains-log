const React = require('react')

function Show (props) {
    return (
        <div>            
            <h1>{props.log.title}</h1>            
            <p>The log reads, "{props.log.entry} and {props.log.shipIsBroken? 'The ship is broken.' : `The ship isn't broken.`}</p>
        </div>
    )    
}

module.exports = Show