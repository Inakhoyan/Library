import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "../Catalog/catalog.css";

export const Catalog = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	}

	return (
		<div className='bg'>
		<header>
			<nav ref={navRef}>
			<div className='input-wrapper'>

			<input type="text" placeholder='Search'/>
				<div className='search-icon'>

					<IoIosSearch />
				</div>
			</div>
				<h4>Fillter Options</h4>
				<a href="#">All Books</a><br />
				<a href="#">Fiction</a><br />
				<a href="#">Non-Fiction</a><br />
				<a href="#">Biography</a><br />
				<a href="#">History</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</div>
	);
};