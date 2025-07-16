// src/components/BookingForm/BookingFormStep1.js
import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import styles from './BookingForm.module.css';
import '@mantine/core/styles.css';
import { DatePicker } from '@mantine/dates';
import classes from './DatePicker.module.css';


export default function BookingFormStep1() {
    const [selected, setSelected] = useState([]);
    const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  return (
    <form className={styles.bookingFormStep} >
      <h3 className={styles.pageHeading}>Select date and no.guest</h3>
      <p className={styles.stepTitle}>{selected}16 JANUARY 2025 for 4 guests</p>
      {/* Mantine Calendar Component */}
      <div className={styles.calendarWrapper}>
        <Calendar
        getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
        })}
        classNames={{
          calendarHeader: classes['mantine-DatePicker-calendarHeader'],
          calendarHeaderControl: classes['mantine-DatePicker-calendarHeaderControl'],
          calendarHeaderControlIcon: classes['mantine-DatePicker-calendarHeaderControlIcon'],
        }}
        />;
      </div>
      <p className={styles.calendarNote}>Note. Reservations can be made up to 30 days in advance.</p>
      {/* ... Number of Guests and Button remain the same ... */}

      <div className={styles.guestInputWrapper}>
        <label htmlFor="res-guests" className={styles.guestLabel}>No. Guest</label>
        <select
          id="res-guests"
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