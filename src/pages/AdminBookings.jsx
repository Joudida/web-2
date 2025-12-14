import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/trainers/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (bookingId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:5000/api/trainers/admin/bookings/${bookingId}`, {
        headers: { Authorization:` Bearer ${token}` },
      })
      .then((res) => {
        alert(res.data);
        setBookings((prev) => prev.filter((b) => b.bookingId !== bookingId));
      })
      .catch((err) => console.log(err));
  };

  if(bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div className="admin-bookings-container">
      {bookings.map((b) => (
        <div key={b.bookingId} className="admin-booking-card">
          <img src={b.image} alt={b.trainerName} className="admin-booking-image" />
          <h3>{b.trainerName}</h3>
          <p>Specialty: {b.specialty}</p>
          <p>Gym: {b.gym}</p>
          <p>User: {b.userName}</p>
          <p>Booked on: {new Date(b.booking_date).toLocaleString()}</p>
          <button className="delete-button" onClick={() => handleDelete(b.bookingId)}>
            Delete Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminBookings;