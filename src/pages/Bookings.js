// src/pages/Booking.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { rooms } from '../data';
import { motion } from 'framer-motion';  // Import motion

const Booking = () => {
  const { id } = useParams();
  const room = rooms.find(room => room.id === parseInt(id));

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    room.bookingDetails = { ...userDetails, date: new Date().toLocaleString() };
    setIsBooked(true);
    alert('Booking confirmed!');
  };

  if (!room) return <h1>Room not found</h1>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>{room.name}</h1>
      <img src={room.image} alt={room.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <p>Price: ${room.price}/night</p>
      <p>Rating: {room.rating} stars</p>
      <p>Features: {room.features.join(', ')}</p>

      {!isBooked ? (
        <motion.form 
          onSubmit={handleBooking}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Enter Your Details for Booking</h2>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={userDetails.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Contact Number: </label>
            <input type="tel" name="contact" value={userDetails.contact} onChange={handleInputChange} required />
          </div>
          <button type="submit">Confirm Booking</button>
        </motion.form>
      ) : (
        <motion.div 
          className="booking-details"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Booking Confirmed!</h2>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Contact:</strong> {userDetails.contact}</p>
          <p><strong>Booking Date:</strong> {room.bookingDetails.date}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Booking;