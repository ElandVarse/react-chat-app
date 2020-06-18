import React from 'react'

import './Input.css'

const Input = ({message, setMessage, sendMessage}) => (
    <form action="" className="form">
        <input 
            type="text" 
            className="input"
            placeholder="Digite uma mensagem..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>
            Enviar
        </button>
    </form>
)

export default Input;