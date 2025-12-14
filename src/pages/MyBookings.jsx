import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/trainers/mybookings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }, []);

  // دالة لإلغاء الحجز
  const handleCancel = (bookingId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:5000/api/trainers/cancel/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert(res.data);
        setBookings((prev) => prev.filter((b) => b.bookingId !== bookingId));
      })
      .catch((err) => console.log(err));
  };

  if (bookings.length === 0) return <p className="no-bookings">You have no bookings yet.</p>;

  return (
    <div className="bookings-container">
      {bookings.map((b) => (
        <div key={b.bookingId} className="booking-card">
          <img src={b.image} alt={b.trainerName} className="booking-image" />
          <h3>{b.trainerName}</h3>
          <p>{b.specialty}</p>
          <p>{b.gym}</p>
          <p>Booked on: {new Date(b.booking_date).toLocaleString()}</p>
          <button className="cancel-button" onClick={() => handleCancel(b.bookingId)}>
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
