import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Admin = () => {
  return (
    <div>
      <Navbar/>
      <button><Link to='/upload'>Add on</Link></button>
    </div>
  )
}

export default Admin
