import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [SearchData, SetSearchData] = useState(null);
  const [productsData, setProductsData] = useState([]);

  let throttle = false;


  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data)
  };

  let filteredData = () => {
    console.log("filter running")
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(SearchData.toLowerCase());
    })
    setProductsData(result)
  }

  useEffect(() => {
    if (!SearchData) return;
    let timeout = setTimeout(() => {
      filteredData();

      return () =>clearTimeout(timeout) // ye tab chalega jab purana jaega and new aega . 

      //debouncing means humesha ek change k baad chalta rahega.......
      //throttling -> mujhe matlab tum kitne bhi change/action do , i will only render when my time comes....
      //UseCase --> LAzyLoading --> Scrollbar vali loading (Instagram).. ab instagram ne replace kiya hain using tanStack query.

    }, 300)

    return () => clearTimeout(timeout);
  }, [SearchData])


  // throttling.... scroll basis pe ek event 

  useEffect(()=>{

    if(throttle) return;

    let handleScroll = () =>{
      throttle = true;
      console.log("Scrolling trigerred...")
      

      setTimeout(()=>{
        throttle = false;
      },4000)
    }


    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);

  },[])

  useEffect(() => {
    getProducts();
  }, [])



  return (
    <div>
      <h1>Debouncing........</h1>

      <input style={{ padding: "10px 30px" }} type='text' placeholder='Search Products ...' onChange={(e) => SetSearchData(e.target.value)} />

      {
        productsData.map((val) => {
          return <h1 key={val.id}>{val.title}</h1>
        })
      }
    </div>
  )
}

export default App
