import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import "../Catalog/catalog.css";


export const Catalog = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
    <div className="bg">
      <header>
        <nav ref={navRef}>
          <div className="input-wrapper">
            <input type="text" placeholder="Search" />
            <div className="search-icon">
              <IoIosSearch  />
            </div>
          </div>
          <h4>Fillter Options</h4>

          <Link to="/" >
            All Books
          </Link>
          <br />
          <Link to="/">Fiction</Link>
          <br />
          <Link to="/">Non-Fiction</Link>
          <br />
          <Link to="/">Biography</Link>
          <br />
          <Link to="/">History</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};
