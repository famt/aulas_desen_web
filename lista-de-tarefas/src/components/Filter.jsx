import React, {useState} from 'react'

function Filter({filter}) {
    const [texto, setInput] = useState('')

    const handleChange = e => {        
        setInput(e.target.value)
        filter(texto);
    }

    return (
        <div className="filter">
            <input
                type='text'
                placeholder='Filtre suas tarefas'
                className="filter-input"    
                value={texto}
                onChange={handleChange}
                onKeyUp={handleChange}
            />
        </div>
    )
}

export default Filter
