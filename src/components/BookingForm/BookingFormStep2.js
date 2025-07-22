// src/components/BookingForm/BookingFormStep2.js
import React, { useState } from 'react';
import dayjs from 'dayjs';
import styles from './BookingForm.module.css'; // We'll re-use the same stylesheet
import { MdArrowBackIos } from "react-icons/md";


// This array holds all the available time slots.
const availableTimes = [
    '17:15', '17:30', '17:45', '18:00',
    '18:15', '18:30', '18:45', '19:00',
    '19:15', '19:30', '19:45', '20:00',
    '20:15', '20:30', '20:45', '21:00',
    // Add more times here if needed
];

export default function BookingFormStep2({ bookingData, updateBookingData, goToNextStep }) {
    // We use local state to track the currently selected time.
    const [selectedTime, setSelectedTime] = useState(bookingData.time);

    // This function runs when a user clicks a time slot.
    const handleTimeSelect = (time) => {
        setSelectedTime(time); // Update our local state for instant UI feedback
        updateBookingData({ time: time }); // Immediately update the parent's state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        goToNextStep(); // Move to Step 3
    };

    // Format the date and guest info from the parent for display
    const formattedDate = bookingData.date
        ? dayjs(bookingData.date).format('D MMMM YYYY').toUpperCase()
        : '';
    const guestText = `${bookingData.guests} ${bookingData.guests > 1 ? 'GUESTS' : 'GUEST'}`;

    return (
        <form className={styles.bookingFormStep} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <MdArrowBackIos className={styles.backButton} />
                <h3 className={styles.pageHeading}>Select time</h3>
            </div>
            <p className={styles.stepTitle}>{`${formattedDate} FOR ${guestText}`}</p>

            {/* A grid to display all the time slots */}
            <div className={styles.timeGrid}>
                {availableTimes.map((time) => (
                    <button
                        key={time}
                        type="button" // Important: type="button" prevents form submission
                        className={`${styles.timeSlotButton} ${selectedTime === time ? styles.selectedTimeSlot : ''}`}
                        onClick={() => handleTimeSelect(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>

            {/* This text appears only after a time has been selected */}
            {selectedTime && (
                <p className={styles.summaryText}>
                    Your selected time: <strong>{selectedTime}</strong>
                </p>
            )}

            <button
                type="submit"
                className={styles.checkAvailableBtn}
                // The button is disabled until a time is chosen
                disabled={!selectedTime}
            >
                Reserve your time
            </button>
        </form>
    );
}