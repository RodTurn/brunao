import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Brunao from './components/Brunao';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductsList />} />
        <Route exact path="/brunao" element={<Brunao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
