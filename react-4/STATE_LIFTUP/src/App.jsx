import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;