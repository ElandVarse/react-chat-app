import React from 'react'

import './Message.css'

import ReactEmoji from 'react-emoji'

const Message = ({message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim();

    //Checa se a mensagem enviada foi do usuário atual
    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    
    return (
        isSentByCurrentUser 
            ? (
                //Caso sim
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">
                        {trimmedName}
                    </p>    

                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>
                </div>
            )
            : (
                //Caso não
                <div className="messageContainer justfifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>

                    <p className="sentText pl-10">
                        {user}
                    </p>    
                </div>
            )
    )
}

export default Message;