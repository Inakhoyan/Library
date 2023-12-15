import React, { useState } from "react";
import './App.css';
import { Header} from './Home/Header';

function App() {
	const [currentForm, setCurrentForm] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
	  <>

    <div className="App">
      <Header /> 
    </div>
	  </>
  );
}

export default App;
