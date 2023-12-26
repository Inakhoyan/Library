import React from "react";
import './App.css';
import { Header} from './Home/Header';

function App() {
// 	const [currentForm, setCurrentForm] = useState('');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

	
  return (
	  <>
		{/* <div>
			<button onClick={request}></button>
		</div> */}
    <div className="App">
      <Header /> 
    </div>
	  </>
  );
}

export default App;
