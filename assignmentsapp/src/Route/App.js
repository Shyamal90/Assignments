import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Navbar';
import Products from './Components/Products';
import Product from './Components/Product';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App
