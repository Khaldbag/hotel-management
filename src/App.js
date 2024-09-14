// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Bookings';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for the Booking page with dynamic room id */}
          <Route path="/bookings/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;