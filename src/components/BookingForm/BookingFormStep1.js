// src/components/BookingForm/BookingFormStep1.js

import React, { useState } from 'react';
import { Calendar } from '@mantine/dates'; // <--- NEW: Import Calendar from Mantine
import dayjs from 'dayjs'; // <--- NEW: Import dayjs for date manipulation
import styles from './BookingForm.module.css'; // Shared CSS

export default function BookingFormStep1({ bookingData, updateBookingData, goToNextStep }) {
  // Local state for the selected date from the calendar
  // Initialize with parent bookingData.date or null
  const [selectedDate, setSelectedDate] = useState(bookingData.date || null);
  // Local state for number of guests
  const [numGuests, setNumGuests] = useState(bookingData.guests);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!selectedDate || numGuests < 1 || numGuests > 10) {
      alert("Please select a valid date and number of guests (1-10).");
      return;
    }
    // Update parent state with data from this step
    updateBookingData({ date: selectedDate, guests: numGuests });
    goToNextStep(); // Proceed to the next step
  };

  // Define min and max dates for the calendar
  const today = dayjs();
  const minDate = today.toDate(); // Today's date
  const maxDate = today.add(30, 'days').toDate(); // 30 days from today

  return (
    <form className={styles.bookingFormStep} onSubmit={handleSubmit}>
      <p className={styles.stepTitle}>DATE / GUEST</p>
      <h3 className={styles.pageHeading}>Select date and no.guest</h3>

      {/* Mantine Calendar Component */}
      <div className={styles.calendarWrapper}> {/* Added a wrapper for custom styling */}
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={minDate} // Enforce reservations up to 30 days in advance
          maxDate={maxDate}
          // Default year and month for initial view, if no date is selected
          defaultDate={selectedDate || new Date()}
          // Other props can be added here, e.g., numberOfMonths={1}
          // Styles API integration (see Step 4 for more detail)
          // classNames={myCalendarClassNames} or styles={(theme) => ({...})}
        />
      </div>

      {/* Number of Guests */}
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