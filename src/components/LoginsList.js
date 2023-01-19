import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import UserData from '../store/data';

import LoginDetails from './LoginDetails';
import Login_Icon from '../assets/icons/Login.svg'
import '../assets/css/LoginCards.css'

const LoginsList = observer(() => {
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
        {UserData.data.map((card, index) => (
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
      {UserData.data && UserData.data[activeTab] && 
        <LoginDetails key={activeTab} name={UserData.data[activeTab].name} username={UserData.data[activeTab].username} password={UserData.data[activeTab].password}/>
      }
    </>
  );
})

export default LoginsList;
