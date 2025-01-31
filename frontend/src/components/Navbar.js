import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" ><b>VILLA</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to='/menu'>Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/cart'>Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to='/cotage'>Cotage</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/admin'>Admin</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to='/fechfile'>Form</Link>
        </li> */}
       
      </ul>
    </div>
  </div>
</nav> 

    </div>
  )
}

export default Navbar