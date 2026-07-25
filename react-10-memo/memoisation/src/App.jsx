import {React,useCallback,useState} from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log("App is rendering")

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name:"Anthony",id:11})

  //callback , dependency array
  let greet = useCallback(()=>{
    console.log("Good Evening/Morning/Night")
  },[]);


  return (
    <div>
      
      <h1>APP is here baby</h1>
      <h2>Memoisation</h2>
      <h2>Count is {count}</h2>
      <button onClick={()=>setCount(count+1)} className='bg-blue-400 border border-r-amber-300'>Increment </button>
      <button onClick={()=>setUser({...user,name:"Ronaldo"})} className='bg-blue-400 border border-r-amber-300'>Change Name</button>
      {/* <Home user={user}/> */}
      <About greet={greet}/>
    </div>
  )
}

export default App
