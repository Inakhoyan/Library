
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import "../Catalog/catalog.css";

 import { MainArea } from '../Home/MainArea';
import React, { useState } from 'react';



export const Catalog = () => {

	const [category, setCategory] = useState('all');

	const CategoryChange = (newCategory) => {
		setCategory(newCategory);
	};


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

          <Link to="/category/all" onClick={() => CategoryChange('all')}>
            All Books
          </Link>
          <br />
          <Link to="/category/JavaScript" onClick={() => CategoryChange('math')}>
		    JavaScript Language
		  </Link>
          <br />
          <Link to="/category/Java" onClick={() => CategoryChange('Java')}>
		  Java
		  </Link>
          <br />
          <Link to="/category/Computer Science" onClick={() => CategoryChange('ComputerScience')}>
		  Computer Science
		  </Link>
          <br />
          <Link to="/category/Science" onClick={() => CategoryChange('Science')}>
		  Science
		  </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
		

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

      </header>

		{category === 'all' && <MainArea category={category} />}

		{category === 'math' && <MainArea category={category} />}

		{category === 'Java' && <MainArea category={category} />}

		{category === 'ComputerScience' && <MainArea category={category} />}
		
		{category === 'Science' && <MainArea category={category} />}
    </div>
  );
};
