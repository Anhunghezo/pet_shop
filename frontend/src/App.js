import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import DogsPage from './components/Dogs/DogsPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';



function App() {
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs")
      return res
    }

    getData().then(res => console.log(res))
  }, [])


  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dogs' element={<DogsPage />} />
            <Route path='/checkout' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
