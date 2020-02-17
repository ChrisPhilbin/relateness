import React from 'react'
import { NavLink } from 'react-router-dom'

const TopNav = () => (
  <header>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  <a className="navbar-brand" href="/">Relateness - Connect with your peers</a>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarNav">
	    <ul className="navbar-nav">
	      <li className="nav-item active">
	        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
	      </li>
	      <li className="nav-item">
	        <NavLink to ="#" className="nav-link">Employees</NavLink>
	      </li>
	      <li className="nav-item">
	      	<NavLink to="#" className="nav-link">Interests</NavLink>
	      </li>
	      <li className="nav-item">
	      	<NavLink to="#" className="nav-link">Help</NavLink>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link disabled" href="#">Signout</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  </header>
)

export default TopNav