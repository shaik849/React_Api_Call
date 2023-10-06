import React from 'react'

function UserController(props) {
    console.log(props.data)
  return (
    <div>
        <img key={Math.random() * 1000} src= {props.data.picture.large} alt="user" />
        <h1 key={Math.random() * 1000}>{props.data.name.first}</h1>
        <p key={Math.random() * 1000}>{props.data.phone}</p>
    </div>
  )
}

export default UserController