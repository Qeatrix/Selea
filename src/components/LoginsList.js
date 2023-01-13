import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import LoginDetails from './LoginDetails';

import Login_Icon from '../assets/icons/Login.svg'
import '../assets/css/LoginCards.css'
import axios from 'axios';

const LoginsList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/data')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }

  const handleMouseEnter = (index) => {
    if (index !== activeTab) {
        setHoveredTab(index);
    }
  }

  const handleClick = (index) => {
    setHoveredTab(null);
    setActiveTab(index);
  }

  if (!data || !data[activeTab]) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <ul>
        {data.map((card, index) => (
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
                    <div>{card.username}</div>
                </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="LoginDetails">
          <img className="LoginDetailsIcon" src={Login_Icon}></img>
        </div>
          <LoginDetails key={activeTab} name={data[activeTab].name} username={data[activeTab].username} password={data[activeTab].password}/>
          {data[activeTab].password} 
      </div>
    </>
  );
}

export default LoginsList;
