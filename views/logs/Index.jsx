const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Logs</h1>
            <p><a href="/logs/new">Add a log</a></p>
            <ul>
                {
                    props.logs.map(log => {
                        return (
                            <li key={log.id}>
                                <h2><a href={`/logs/${log.id}`}>{log.title}</a></h2>
                                <p>{log.entry}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )    
}

module.exports = Index