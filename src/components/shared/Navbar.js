import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './../home/Home';
import About from './../about/About';
import NotFound from './NotFound';
import './Navbar.css';

const Navbar = () => {
  return (
    <> 
      <div className='nav-wrapper'>
        <div className="nav-group">
          <div className="nav-title">REACT</div>
          <div className="nav-menu">
            <ul>
              <li className="nav-menu-item">
                <Link to='/home'>Home</Link>
              </li>
              <li className="nav-menu-item">
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="**" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navbar;
