// src/components/BookingForm/BookingFormStep1.js

import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import styles from './BookingForm.module.css';
import { DatePicker } from '@mantine/dates';


export default function BookingFormStep1({ bookingData, updateBookingData, goToNextStep }) {
  const [selectedDate, setSelectedDate] = useState(bookingData.date || null);
  const [numGuests, setNumGuests] = useState(bookingData.guests);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || numGuests < 1 || numGuests > 10) {
      alert("Please select a valid date and number of guests (1-10).");
      return;
    }
    updateBookingData({ date: selectedDate, guests: numGuests });
    goToNextStep();
  };

  const today = dayjs();
  const minDate = today.toDate();
  const maxDate = today.add(30, 'days').toDate();

  return (
    <form className={styles.bookingFormStep} onSubmit={handleSubmit}>
      <p className={styles.stepTitle}>DATE / GUEST</p>
      <h3 className={styles.pageHeading}>Select date and no.guest</h3>

      {/* Mantine Calendar Component */}
      <div className={styles.calendarWrapper}>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={minDate}
          maxDate={maxDate}
          defaultDate={selectedDate || new Date()}
          numberOfMonths={1} /* <--- NEW: Show only one month as per your design */
          // NEW: Apply custom styles using Mantine's classNames prop
        />
        <p className={styles.calendarNote}>Note. Reservations can be made up to 30 days in advance.</p>
      </div>

      {/* ... Number of Guests and Button remain the same ... */}
      <label htmlFor="res-guests" className={styles.guestLabel}>No. Guest</label>
      <div className={styles.guestInputWrapper}>
        <select
          id="res-guests"
          value={numGuests}
          onChange={e => setNumGuests(parseInt(e.target.value, 10))}
          required
          className={styles.guestSelect}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <span className={styles.dropdownArrow}>&#9660;</span>
      </div>

      <button type="submit" className={styles.checkAvailableBtn}>Check Available</button>
    </form>
  );
}