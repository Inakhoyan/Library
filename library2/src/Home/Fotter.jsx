import React from 'react';
import { Link } from 'react-router-dom';

export const Fotter = () => {
  return (
    <footer style={{ display: 'flex', backgroundImage: 'linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)', marginTop: '60px' }}>
	
      <div className="contact" style={{ marginLeft: '500px'}}>
        {/* Address, phone, email */}
		<h4>Contact US</h4><br />
                <span>Academy Address </span><br />
                <span>City, State Zip</span><br />
                <span>Phone:(+374) 341976</span><br />
                <span>Email:picsart@academy.com</span>
      </div>
      <div className="library-hours" style={{marginLeft: '300px'}}>
        {/* Library hours */}
		<h4>Library Hours</h4><br />
				<span>Monday-Friday: 9am-5pm</span><br />
				<span>Saturday: 10am - 4pm</span><br />
				<span>Sunday: Closed</span>
      </div>
      <div className="helpful-links" style={{ marginLeft: '400px', color: 'white', textDecoration: 'none'}}>
        {/* Links to website, social media, feedback form */}
		<h4>Helpful Links</h4><br />
				<Link to="/https://picsartacademy.am/" style={{color: 'white', textDecoration: 'none'}}>Academy Website</Link><br />
				<Link to="/https://www.facebook.com/?locale=ru_RU" style={{color: 'white', textDecoration: 'none'}}>Facebook</Link><br />
				<Link to="/https://twitter.com/?lang=ru" style={{color: 'white', textDecoration: 'none'}}>Twitter</Link><br />
				<Link to="/https://www.jotform.com/form-templates/category/feedback" style={{color: 'white', textDecoration: 'none'}}>Feedback Form</Link>
      </div>
    </footer>
  );
};

export default Fotter;
