import React, { useState } from 'react';

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
    <div>
      <div className="LoginDetails">
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleNameChange}/>
        </div>
        <div>
          <label>Login: </label>
          <input type="text" value={username} onChange={handleLoginChange}/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        </div>
    </div>
    );
}

export default LoginDetails;
