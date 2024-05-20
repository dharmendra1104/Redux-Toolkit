import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const items=useSelector((state)=>state.cart)
  console.log(items)
  return (
    <div className='w-100'>
      <div className='flex justify-end gap-3 bg-slate-600 w-100 text-white p-3 text-xl'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Cart"}>Cart</Link>
        <span>items:{items.length}</span>
      </div>
    </div>
  )
}

export default Navbar
