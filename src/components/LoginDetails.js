import React, { useState } from 'react';

import '../assets/css/LoginDetails.css';
import Login_Icon from '../assets/icons/Login.svg'

const LoginDetails = (props) => {
  const [name, setName] = useState(props.name);
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleLoginChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="LoginDetails">
        <div className="LoginDetailsName">
          <img src={Login_Icon} alt="Login Icon"></img>
          <input type="text" value={name} onChange={handleNameChange}/>
        </div>
        <div className="LoginDetailsContainer">
          <div>
            <label>Login</label>
            <div className="LoginDetailsInputContainer">
              <input type="text" value={username} onChange={handleLoginChange}/>
              <button className="LoginDetailsInputMenuButton">O</button>
              <button className="LoginDetailsInputCopyButton" style={{display:"none"}}>Copy</button>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className="LoginDetailsInputContainer">
              <input type="password" value={password} onChange={handlePasswordChange}/>
              <button className="LoginDetailsInputMenuButton">O</button>
              <button className="LoginDetailsInputCopyButton" style={{display:"none"}}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default LoginDetails;
