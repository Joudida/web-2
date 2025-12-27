import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminBooking.css";

function AdminBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/deletebooking/${id}`
      );
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin – All Bookings</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Trainer</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.full_name}</td>
              <td>{b.phone}</td>
              <td>{b.trainer_name}</td>
              <td>{b.booking_date}</td>
              <td>{b.notes || "-"}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(b.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBooking;