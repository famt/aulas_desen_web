import React, {useState} from 'react'

function Form(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input,
            isChecked: false,
            showCheckIcon: true,
            showBackIcon: false
        })

        setInput('')
    }

    return (
        <form className='lista-de-tarefas-form' onSubmit={handleSubmit} >
            <input
                type='text'
                placeholder='Adicione uma tarefa'
                value={input}
                name='text'
                className='item-input'
                onChange={handleChange}
            />
            <button className='item-button'>Inserir</button>
        </form>
    )
}

export default Form
