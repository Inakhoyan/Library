import React, { useState } from "react";
import { Catalog } from "../Catalog/Catalog";
import {MainArea} from '../Home/MainArea';
import {Fotter} from '../Home/Fotter';

import { Login } from "../Login/Login";
import { Register } from "../Login/Register";
import { Link } from "react-router-dom";
import "./header.css"


export const Header = () => {
	const [currentTab, setCurrentTab] = useState('Home');

	const [currentForm, setCurrentForm] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

	
	const handleTabChange = (tab) => {
		setCurrentTab(tab);	
	}

return ( 
    <>  
      <footer style={{ color: 'white', backgroundImage: 'linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)' }}>
        <div className="logo">
          {/* Insert academy's logo */}
          <img src="logo.png" alt="Academy Logo" style={{ maxHeight: '50px', marginLeft: '1050px' }}/>
        </div>
        <nav className="NaV">
          <ul style={{ listStyle: 'none', display: 'flex', marginLeft: '1750px' }}>
            <li>
              <Link
               	to="/" 
                onClick={() => handleTabChange('Home')} 
                style={{ color: 'white', fontSize: '16px', textDecoration: 'none' }}>
                	Home
				<Catalog />
              </Link>
            </li>
            <li>
              <Link
                to="/login-register" 
                onClick={() => handleTabChange('LoginRegister')} 
                style={{ color: 'white', fontSize: '16px', textDecoration: 'none', paddingLeft: '40px' }}
              >
                Login/Register
              </Link>
            </li>
          </ul>
        </nav>
	  {currentTab === 'Home' && (
		<>
		  <MainArea />
		  <Fotter />
		</>
	  )}
	  {currentTab === 'LoginRegister' && (
                <>
                  {
        			currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    			}
                </>
              )}
      </footer>
    </>
  );
};

export default Header;