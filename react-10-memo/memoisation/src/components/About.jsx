import React from 'react'

const About = ({greet}) => {
    console.log("about rendering")

  return (
    <div>
      <h1>About is here</h1>

      <button className="bg-amber-300 border border-lime-500" onClick={greet}>
        Click Me
      </button>
    </div>
  )
}

export default React.memo( About);
