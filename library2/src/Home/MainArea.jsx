import React from 'react';

export const MainArea = () => {
  return (
    <main style={{ '@media screen and (min-width: 600px)': {
		textAlign: 'center',
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
	}}}>
	
      <div className="welcome-banner" style={{ backgroundImage: 'url(library.jpg)'}}>
        {/* Overlay */}
        <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginLeft: '1250px', marginTop: '50px'}}>
          <h1 style={{ fontSize: '48px', color: 'white' }}>Welcome to the Academy Library</h1>
          <h2 style={{ fontSize: '24px', color: 'white', marginLeft: '160px' }}>Explore our collection of books</h2>
        </div>
      </div>

      {/* Featured Books */}
      {/* Grid layout with books */}

      {/* Recent Additions */}
      {/* Carousel layout with books */}

				<div className="featured-books" style={{ marginTop: '230px', marginLeft: '1000px'}}>
					<h2>Featured Books</h2>
					<div className="books-grid">
						{/* Individual book items */}
						<div className="book-item">
						{/* Book details: image, title, author */}
						</div>
						{/* Repeat book items for other featured books */}
					</div>
					<button className="view-all-button" style={{ marginLeft: '45px'}}>View All</button>
				</div>

			{/* Recent Additions */}
			<div className="recent-additions" style={{ marginTop: '330px',borderBottom: '1px solid white'}}>
			<h2 style={{ marginLeft: '960px'}}>Recent Additions</h2>
			<div className="carousel">
				{/* Navigation arrows */}
				{/* Book carousel items */}
				<div className="carousel-item">
				{/* Book details: image, title */}
				</div>
				{/* Repeat carousel items for other recent additions */}
			</div>
			</div>
    </main>
  );
};

export default MainArea;