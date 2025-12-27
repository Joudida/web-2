import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyBookings.css";

function MyBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const [trainers, setTrainers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchTrainers();
    fetchBookings();
  }, []);

  const fetchTrainers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/gettrainers");
      setTrainers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitBooking = async () => {
    try {
      await axios.post("http://localhost:5000/addbooking", {
        full_name: name,
        phone,
        trainer_id: trainerId,
        booking_date: date,
        notes,
      });

      // ✅ clear without refresh
      setName("");
      setPhone("");
      setTrainerId("");
      setDate("");
      setNotes("");

      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (id) => {
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
    <div className="mybooking-container">
      <h2>Book a Session</h2>

      <form
        className="booking-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitBooking();
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
        >
          <option value="">Select Trainer</option>
          {trainers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Extra notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Book Session</button>
      </form>

      <h2>My Bookings</h2>

      <div className="booking-cards">
        {bookings.map((b) => (
          <div className="booking-card" key={b.id}>
            <h3>{b.full_name}</h3>
            <p>📞 {b.phone}</p>
            <p>🏋️ {b.trainer_name}</p>
            <p>📅 {b.booking_date}</p>
            {b.notes && <p>📝 {b.notes}</p>
            }
            <button onClick={() => deleteBooking(b.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBooking;