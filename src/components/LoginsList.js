import React, { useState } from 'react';
import classNames from 'classnames';

import Database from '../database.json';
import Login_Icon from '../assets/icons/Login.svg'
import '../assets/css/LoginCards.css'

const LoginsList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleMouseEnter = (index) => {
    if (index !== activeTab) {
        setHoveredTab(index);
    }
  }

  const handleClick = (index) => {
    setHoveredTab(null);
    setActiveTab(index);
  }

  return (
    <div>
      <ul>
        {Database.map((card, index) => (
          <li
            key={card.id} 
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredTab(null)}
            className="LoginCard"
          >
            <div
                className={classNames('LoginCardContainer', { 'active-logincard': index === activeTab }, { 'hovered-logincard': index === hoveredTab })}
            >
                <img src={Login_Icon} alt="Login Icon"></img>
                <div className="TextZone">
                    <p>{card.name}</p>
                    <div>{card.login}</div>
                </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {Database[activeTab].password}
      </div>
    </div>
  );
}

export default LoginsList;
