import React from 'react'
import Navbar from '../pages/Navbar'
import Hero from '../pages/Hero'
import CategoriesHome from '../pages/CategoriesHome'
import Login from '../pages/login'
import Signup from '../pages/Signup'
import AddTask from '../pages/AddTask'
const Homepage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col '>

      <Hero/> 
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <AddTask/> */}

    </div>
  )
}

export default Homepage
