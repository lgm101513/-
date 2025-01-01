import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AttractionDetail from './pages/AttractionDetail';
import FoodDetail from './pages/FoodDetail';
import HotelDetail from './pages/HotelDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attraction/:id" element={<AttractionDetail />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;