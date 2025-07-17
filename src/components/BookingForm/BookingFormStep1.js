// src/components/BookingForm/BookingFormStep1.js
import React, { useState } from 'react'; // No more useState or useEffect!
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import '@mantine/dates/styles.css'
import styles from './BookingForm.module.css';

export default function BookingFormStep1({ bookingData, updateBookingData, goToNextStep }) {

    const [selectedDate, setSelectedDate] = useState(bookingData.date);

    // This function now handles the click on a day
    const handleDateSelect = (date) => {
        setSelectedDate(date); // 1. Update our local state for instant feedback
        updateBookingData({ date: date }); // 2. Immediately tell the parent component
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        goToNextStep();
    };

    const today = dayjs();
    const minDate = today.toDate();
    const maxDate = today.add(30, 'days').toDate();

    const formattedDate = selectedDate
        ? dayjs(selectedDate).format('D MMMM YYYY').toUpperCase()
        : '';

    // The console.log should be just before the return statement.
    console.log("Date from parent:", bookingData.date, "Guests from parent:", bookingData.guests);

    return (
        <form className={styles.bookingFormStep} onSubmit={handleSubmit} >
            <h3 className={styles.pageHeading}>Select date and no.guest</h3>

            {selectedDate && bookingData.guests > 0 ? (
                <p className={styles.stepTitle}>
                    {`${formattedDate} for ${bookingData.guests} ${bookingData.guests > 1 ? 'guests' : 'guest'}`}
                </p>
            ) : null}

            <div className={styles.calendarWrapper}>
                <Calendar
                    minDate={minDate}
                    maxDate={maxDate}
                    getDayProps={(date) => ({
                        selected: dayjs(date).isSame(selectedDate, 'day'),
                        onClick: () => handleDateSelect(date),
                    })}
                    classNames={{
                        calendarHeader: styles.calendarHeader,
                        calendarHeaderControl: styles.calendarHeaderControl,
                        calendarHeaderControlIcon: styles.calendarHeaderControlIcon,
                        month: styles.month,
                        monthCell: styles.monthCell,
                        monthThead:styles.monthThead,
                        levelsGroup:styles.levelsGroup,
                        weekday: styles.weekday,
                        day: styles.day,
                    }}
                />
            </div>
            <p className={styles.calendarNote}>Note. Reservations can be made up to 30 days in advance.</p>
            <div className={styles.guestInputWrapper}>
                <label htmlFor="res-guests" className={styles.guestLabel}>No. Guest</label>
                <select
                    id="res-guests"
                    // Read value directly from parent props
                    value={bookingData.guests}
                    // onChange now *only* tells the parent to update
                    onChange={(e) => updateBookingData({ guests: parseInt(e.target.value, 10) })}
                    required
                    className={styles.guestSelect}
                >
                    <option value="0" disabled>Select guests</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <span className={styles.dropdownArrow}></span>
            </div>

            <button
                type="submit"
                className={styles.checkAvailableBtn}
                disabled={!bookingData.date || bookingData.guests === 0}
            >Check Available
            </button>
        </form>
    );
}