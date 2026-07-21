import{useState, React} from 'react'

const App = () => {


  const [name, SetName] = useState("SAMANTHA")


  const handleClick = () => {
      SetName("YOLO");
  }

  return (
    <div>
      <h1>Change Name</h1>

      <button className="bg-taupe-600 border-amber-100" onClick={handleClick}>Change </button>
      <h1>{name}</h1>
    </div>
  )
}

export default App
