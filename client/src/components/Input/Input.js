import React from 'react'

import './Input.css'

import { Send } from 'react-feather'

const Input = ({message, setMessage, sendMessage}) => (
    <form className="form">
        <input 
            type="text" 
            className="input"
            placeholder="Digite uma mensagem..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        > 
        </input>
        <button className="sendButton" onClick={(event) => sendMessage(event)}>
            <Send size={25}/>
        </button>
    </form>
)

export default Input;