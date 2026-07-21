import {React,useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    


  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
    </div>
  )
}

export default Counter
