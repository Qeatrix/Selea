import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import UserData from '../store/data';

import LoginDetails from './LoginDetails';
import Login_Icon from '../assets/icons/Login.svg'
import '../assets/css/LoginCards.css'

const LoginsList = observer(() => {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleMouseEnter = (index) => {
    if (index !== activeTab) {
        setHoveredTab(index);
    }
  }

  const handleClick = (id) => {
    setHoveredTab(null);
    setActiveTab(id);
    console.log(activeTab);
  }

  useEffect(() => {
    UserData.getDataFromStore();
    const interfavId = setInterval(() => {
      UserData.getDataFromStore();
    }, 3000);

    return () => { clearInterval(interfavId) }
  }, []);

//  if (UserData.isFetching) {
    //return <div>Data is fetching...</div>
  //}

  if (UserData.error) {
    return (
      <div className='SyncErrorMessageContainer'>
        <p>Error: {UserData.error.message}</p>
        <button onClick={() => UserData.fetchData()}>Retry</button>
      </div>
    )
  }

  return (
    <>
      <ul>
        {UserData.data.slice().sort((a, b) => a.id - b.id).map((card, index) => (
          <li
            key={card.id} 
            onClick={() => handleClick(card.id)}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className="LoginCard"
          >
            <div
              className={classNames('LoginCardContainer', { 'active-logincard': card.id === activeTab }, { 'hovered-logincard': card.id === hoveredTab })}
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
      {UserData.data && UserData.data.find(d => d.id === activeTab) && 
        <LoginDetails key={activeTab} {...UserData.data.find(d => d.id === activeTab)}/>
      }
    </>
  );
})

export default LoginsList;
