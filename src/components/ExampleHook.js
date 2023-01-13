import React, { useState } from 'react'
import axios from 'axios'

function DataHandler() {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        customFields: {}
    })

    const handleGetData = () => {
        axios.get('http://localhost:3001/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    const handleSendData = () => {
        axios.post('http://localhost:3001/data', formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <button onClick={handleGetData}>Get</button>
            {data.map(item => (
                <div key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>Username: {item.username}</p>
                </div>
            ))}
            <form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <label>
                    Custom Fields:
                    <input type="text" name="customFields" onChange={handleChange} />
                </label>
            </form>
            <button onClick={handleSendData}>Send</button>
        </div>
    )
}

export default DataHandler;
