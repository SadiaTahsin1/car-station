import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../New folder/images/Logo1.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
         <nav class="navbar navbar-inverse">
         <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <span style={{fontFamily:"cursive",color:"white",fontSize:'28px'}}>HexaCar</span>
            {/* <img class="img-thumbnail" src={logo} alt=""/> */}
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
          
      <ul class="nav navbar-nav navbar-right">
       <li class="active">
          <Link to='/home'>
           Home</Link></li>
        <li>
         <a href="#">About</a>
        </li>
        <li><a href="#">Services</a></li>
       
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
  
        </div>
    );
};

export default Navbar;