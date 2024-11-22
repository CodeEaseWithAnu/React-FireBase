import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl">            
      <span className=" nav-item-name mt-[3rem]">      
      Home
      </span>
      </Link>
      <div>                 
        
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signUp" className="bg-pink-500 hover:underline px-4 py-2 rounded">Sign Up</Link>
          </>
        
      </div>
    </nav>
  )
}

export default Navigation
