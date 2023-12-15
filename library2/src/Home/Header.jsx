import React, { useState } from "react";
import { Catalog } from "../Catalog/Catalog";
import {MainArea} from '../Home/MainArea';
import {Fotter} from '../Home/Fotter';

import { Login } from "../Login/Login";
import { Register } from "../Login/Register";


export const Header = (but) => {
	const [currentTab, setCurrentTab] = useState('Home');

	const [currentForm, setCurrentForm] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

	
	const handleTabChange = (tab) => {
		setCurrentTab(tab);	
	}

	const authFormClass = currentTab === 'LoginRegister' ? 'auth-form-container responsive' : 'auth-form-container';

	
//   return ( 

// 	<>	
//     <footer style={{ color: 'white' }}>
//       <div className="logo">
//         {/* Insert academy's logo */}
// 		<img src="logo.png" alt="Academy Logo"  style={{ maxHeight: '50px', marginLeft: '1050px' }}/>
	
//       </div>
//       <nav>
//         <ul style={{ listStyle: 'none', display: 'flex', marginLeft: '1750px' }}>
//           <li>
//             <a href="../Home/Header.jsx" 
// 			onClick={() => handleTabChange('Home')} 
// 			style={{ color: 'white', fontSize: '16px', textDecoration: 'none' }}>Home</a>

// 			<Catalog />
//           </li>
//           {/* Add other navigation links similarly */}
// 		  <li>
// 			<a href="#" style={{ color: 'white', fontSize: '16px', textDecoration: 'none', paddingLeft: '40px' }}>Catalog</a>
// 		  </li>
// 		  <li>
// 			<a href="../Login/Login.jsx" 
// 			onClick={() => handleTabChange('Login')} 
// 			style={{ color: 'white', fontSize: '16px', textDecoration: 'none', paddingLeft: '40px' }}>Login/Register</a>

// 		  </li>
//         </ul>
	  
//       </nav>
// 			<MainArea />
// 			<Fotter />
			
//     </footer>
// 	</>
//   );
// };

// export default Header;




return ( 
    <>  
      <footer style={{ color: 'white', '@media screen and (min-width: 600px)': {
		  textAlign: 'center',
	display: 'flex',
	minHeight: '100vh',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white'
	  } }}>
        <div className="logo">
          {/* Insert academy's logo */}
          <img src="logo.png" alt="Academy Logo" style={{ maxHeight: '50px', marginLeft: '1050px' }}/>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', marginLeft: '1750px' }}>
            <li>
              <a 
                href="#" 
                onClick={() => handleTabChange('Home')} 
                style={{ color: 'white', fontSize: '16px', textDecoration: 'none' }}>
                	Home
				<Catalog />
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => handleTabChange('LoginRegister')} 
                style={{ color: 'white', fontSize: '16px', textDecoration: 'none', paddingLeft: '40px' }}
              >
                Login/Register
              </a>
              {currentTab === 'LoginRegister' && (
                <>
                  {
        			currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    			}
                </>
              )}
            </li>
          </ul>
        </nav>
	  {currentTab === 'Home' && (
		<>
		  <MainArea />
		  <Fotter />
		</>
	  )}
      </footer>
    </>
  );
};

export default Header;