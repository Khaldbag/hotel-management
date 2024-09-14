// src/components/RoomCard.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const RoomCard = ({ room }) => {
  return (
    <motion.div 
      className="room-card" 
      whileHover={{ scale: 1.05 }}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "15px",
        width: "250px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <img 
        src={room.image} 
        alt={room.name} 
        style={{ 
          width: '100%', 
          height: '150px', 
          objectFit: 'cover' 
        }} 
      />
      <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{room.name}</h3>
      <p style={{ fontSize: '0.9rem' }}>Price: ${room.price}/night</p>
      <p style={{ fontSize: '0.9rem' }}>Rating: {room.rating} stars</p>
      <p style={{ fontSize: '0.9rem' }}>Features: {room.features.join(', ')}</p>

      {/* Only wrap the Book Now button with Link */}
      <Link to={`/bookings/${room.id}`} style={{ textDecoration: 'none' }}>
        <button style={{ padding: '5px 10px', fontSize: '0.9rem' }}>Book Now</button>
      </Link>
    </motion.div>
  );
};

export default RoomCard;