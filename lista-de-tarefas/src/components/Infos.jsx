import React from 'react'

function Infos({unchecked, total}) {
    return (
        <div className="infos">
            <p>Tarefas pendentes: {unchecked}/{total}</p>
        </div>
    )
}

export default Infos
