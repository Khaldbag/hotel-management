

import React, { useState } from 'react';
import RoomCard from '../components/roomcard';
import FilterBar from '../components/filterBar';
import { rooms } from '../data';
import { motion } from 'framer-motion';

const Home = () => {
  const [filters, setFilters] = useState({ price: 1000, rating: 1 });
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const filteredRooms = rooms.filter(room => {
    return (
      room.price <= filters.price &&
      room.rating >= filters.rating 

    );
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Grand Hotel</h1>
        <p>Your luxurious escape awaits</p>
      </div>
      <div className="ad-banner">
        <h2>Special Offer: 20% off on all bookings!</h2>
        <p>Book now and enjoy a complimentary breakfast.</p>
      </div>
      <div className="date-inputs">
        <div>
          <label>Check-in Date:</label>
          <input 
            type="date" 
            value={checkInDate} 
            onChange={(e) => setCheckInDate(e.target.value)} 
          />
        </div>
        <div>
          <label>Check-out Date:</label>
          <input 
            type="date" 
            value={checkOutDate} 
            onChange={(e) => setCheckOutDate(e.target.value)} 
          />
        </div>
      </div>
      <FilterBar setFilters={setFilters} />
      <motion.div 
        className="room-list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
      >
        {filteredRooms.length ? filteredRooms.map((room) => (
          <motion.div 
            key={room.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <RoomCard room={room} />
          </motion.div>
        )) : <p>No rooms available for the selected dates.</p>}
      </motion.div>
    </div>
  );
};

export default Home;
