import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  const [button, setButton] = useState(false);
  const [click, setClick] = useState(false)

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(true)
    }else{
      setButton(false)
    }
  }

  const renderButton = click ? (<i onClick={() => setClick(!click)} className="fas fa-times"></i>) : (<i onClick={() => setClick(!click)} className="fas fa-bars"></i>)


  window.addEventListener('resize', showButton)

  useEffect(() =>{
    showButton()
  },[])

  return (
    <nav>
        <div className="nav__logo">
          <h1>LOGO</h1>
        </div>
        {button && renderButton}
        <div className={click ? 'nav__menu active' : 'nav__menu'}>
          
          <ul>
          <Link to='/'><li onClick={() => setClick(!click)}>Home</li></Link>
            <Link to='/products'><li onClick={() => setClick(!click)}>Products</li></Link>
            <Link to='/services'><li onClick={() => setClick(!click)}>Services</li></Link>
            <button onClick={() => setClick(!click)}>Sign Up</button>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
