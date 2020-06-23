import React from 'react';

import onlineIcon from '../../assets/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Aplicação Chat em tempo real <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Feita com React, Express, Node e Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Testa aí! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;