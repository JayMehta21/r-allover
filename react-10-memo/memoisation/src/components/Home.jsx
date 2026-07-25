import React from 'react'

const Home = ({user}) => {
    console.log("Home rendering")
  return (
    <div>
      <h1>Home this side</h1>
      <h2>{user.name}</h2>
    </div>
  )
}

export default React.memo(Home);
