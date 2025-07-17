// src/components/BookingForm/BookingFormStep1.js
import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import styles from './BookingForm.module.css';
import '@mantine/core/styles.css';
import { DatePicker } from '@mantine/dates';
import classes from './DatePicker.module.css';


export default function BookingFormStep1({ bookingData, updateBookingData, goToNextStep }) {
    const [selectedDate, setSelectedDate] = useState(bookingData.date);
    const [numGuests, setNumGuests] = useState(bookingData.guests);

    const handleSubmit = (e) => {
    e.preventDefault();
    updateBookingData({ date: selectedDate, guests: numGuests });
    goToNextStep();
    };

    const today = dayjs();
    const minDate = today.toDate();
    const maxDate = today.add(30, 'days').toDate();

    // Helper to format the date for the conditional paragraph
    const formattedDate = selectedDate
    ? dayjs(selectedDate).format('D MMMM YYYY')
    : '';

//////

  return (
    <form className={styles.bookingFormStep} onSubmit={handleSubmit} >
      <h3 className={styles.pageHeading}>Select date and no.guest</h3>
      {selectedDate && numGuests ?
          <p className={styles.stepTitle}>
            {`${formattedDate} for ${numGuests} ${numGuests > 1 ? 'guests' : 'guest'}`}
          </p> : ""}

            {/* Mantine Calendar Component */}
      <div className={styles.calendarWrapper}>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={minDate}
          maxDate={maxDate}
          // NEW: Use the classNames prop to apply our custom styles
          classNames={{
            calendarHeader: styles.calendarHeader,
            calendarHeaderControl: styles.calendarHeaderControl,
            calendarHeaderControlIcon: styles.calendarHeaderControlIcon,
            weekday: styles.weekday,
            day: styles.day,
          }}
        />
      </div>
      <p className={styles.calendarNote}>Note. Reservations can be made up to 30 days in advance.</p>
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

      <button
        type="submit"
        className={styles.checkAvailableBtn}
        disabled={!selectedDate || numGuests}
      >Check Available</button>
    </form>
  );
}