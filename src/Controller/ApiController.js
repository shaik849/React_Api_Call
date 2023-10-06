import React, {useEffect} from 'react'
import {getPost, getRandomUser} from '../api'
import { useState } from 'react';
import UserController from './UserController';

function ApiController() {
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() =>{
      getPost().then((response) => setData(response));
    }, [])
    useEffect(() =>{
      getRandomUser().then((response) => setUser(response.results[0]));
    }, [])
    const refreshUser = () =>{
      getRandomUser().then((response) => setUser(response.results[0]));
    }
  return (
   <div>
    {user && <UserController  data = {user}></UserController>}
    <button onClick={refreshUser}>Refresh user</button>
      {data ? data.map((e) => <li key={Math.random() * 1000}>{e.title}</li>) : <p>No data</p>}
   </div>
  )
}

export default ApiController