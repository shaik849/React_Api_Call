import React, {useEffect} from 'react'
import getPost from '../api'
import { useState } from 'react';

function ApiController() {
    const [data, setData] = useState(null);
    useEffect(() =>{
      getPost().then((response) => setData(response));
    }, [])
  return (
   <div>
      {data ? data.map((e) => <li>{e.title}</li>) : <p>No data</p>}
   </div>
  )
}

export default ApiController