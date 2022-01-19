import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from "./Login.js"


function App() {

 

  return (
    <div className="App">

        <Router>
          <Routes>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/' element={<Login/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
