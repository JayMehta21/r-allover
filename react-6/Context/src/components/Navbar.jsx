import React from 'react'

const Navbar = ({setisCartOpen}) => {
  return (
    <div className=' bg-blue-400 rounded p-5 flex items-center justify-between'>
      <div>
        logo
      </div>
      <div className='flex gap-10 text-xl'>
        <p onClick={()=>setisCartOpen(false)} className='cursor-pointer'>Home</p>
        <p onClick={() => setisCartOpen(true)} className='cursor-pointer'>Cart</p>
      </div>
      <div>Login</div>
    </div>
  )
}

export default Navbar
