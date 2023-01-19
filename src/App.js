import './assets/css/App.css';
import { useState } from 'react';

import DataHandler from './components/ExampleHook';
import LeftBar from './components/LeftBar';
import { Encrypt, Decrypt } from './lib/EncryptionHandler'

function App() {
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('')

  const ProcessPassword = () => {
    const EncryptedPassword = Encrypt(key, password);
    Decrypt(key, EncryptedPassword);
  }

  return (
    <div className="App">
      <LeftBar/>
      <DataHandler/>
      {/*<input placeholder="Key" onChange={(event) => {setKey(event.target.value)}}></input>
      <input placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}></input>
  <button onClick={ProcessPassword}>Add</button>*/}
    </div> 
  );
}

export default App;
