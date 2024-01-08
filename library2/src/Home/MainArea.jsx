import React from 'react';
import  { useEffect, useState } from "react";
import axios from "axios";
import "./header.css";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

export const MainArea = ({ category }) => {

	const [data, setData] = useState([]);

	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const apiUrl = category === 'all' ? 'http://localhost:9000/user' : `http://localhost:9000/user/${category}`;

		  const response = await axios.get(apiUrl);
		  setData(response.data); // Parsing response.data, assuming it's JSON
		// console.log( data.filter(book => book.category.includes('Math')));
		  
		  console.log(response.data)
		} catch (error) {
		  console.log("Error fetching data:", error);
		}
	  };

	  fetchData();
	}, [category]);

	

  return (
    <main>
	
	<div className="welcome-banner">
  {/* Overlay */}
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <h1 style={{ fontSize: '48px', color: 'white' }}>Welcome to the Academy Library</h1>
    <h2 style={{ fontSize: '24px', color: 'white' }}>Explore our collection of books</h2>
  </div>
</div>

					<h2 className="featured-books" style={{ marginTop: '230px', marginLeft: '1000px'}}>Featured Books</h2><br />


						{/* Repeat book items for other featured books */}
					<button className="view-all-button" style={{ marginLeft: '1045px'}}>View All</button>
						<div className='cards-container'>

							{data.map((d, index) => (
							<div  className="card"key={index}>

							{/* <img src="\" alt="Placeholder" class="card-img"> */}


								<div className="card-content">
								<img src={d.cover_url} alt="" className='img' />
								<h3 className="card-title">{d.title}</h3>
								<p className="card-info">category: <span className="isbn">{d.category}</span></p>
								<p className="card-info">Published Year: {d.published_year} <span className="published-year">Year</span></p>
								<p className="card-info">Category: {d.category} <span className="category">Category</span></p>
								<Link to="/" className="card-link">Read More</Link>
								
								</div>

							{/* {console.log(d)} */}
							</div>
							))}
							</div>

			{/* Recent Additions */}
			<div className="recent-additions" style={{ marginTop: '330px',borderBottom: '1px solid white'}}>
					<h2 style={{ marginLeft: '960px'}}>Recent Additions</h2>
			
			</div>
    </main>
  );
};

export default MainArea;