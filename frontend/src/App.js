import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import DogsPage from './components/Dogs/DogsPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { CartContext } from './Contexts/CartContext';


function App() {

  const [allDogs, setAllDogs] = useState([])
  const [myCart, setMyCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs")
      return res
    }

    getData().then(res => setAllDogs(res.data))
    getData().catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <CartContext.Provider value={{ myCart, setMyCart, total, setTotal }}>
        <Router>
          <Navbar />

          <div className='page-container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dogs' element={<DogsPage allDogs={allDogs} />} />
              <Route path='/checkout' element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
