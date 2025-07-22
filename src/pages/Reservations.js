import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookingFormStep1 from '../components/BookingForm/BookingFormStep1';
import BookingProgressBar from '../components/BookingForm/BookingProgressBar';
import styles from "./Reservations.module.css";
import BookingFormStep2 from '../components/BookingForm/BookingFormStep2';
import BookingFormStep3 from '../components/BookingForm/BookingFormStep3';
import BookingFormStep4 from '../components/BookingForm/BookingFormStep4';
import BookingConfirmation from '../components/BookingForm/BookingConfirmation';

// Define the initial state outside the component so we can easily reuse it.
const initialBookingData = {
    date: null,
    guests: 0,
    time: '',
    tableType: '',
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    note: '',
    promotional: false,
    termsAccepted: false,
};

function Reservations() {
    const [currentStep, setCurrentStep] = useState(1); // State to track the current step (1 to 5)
    const [bookingData, setBookingData] = useState(initialBookingData); // State to hold the booking data across steps

  // Function to update the booking data from child components
  const updateBookingData = (newData) => {
    setBookingData(prevData => ({ ...prevData, ...newData }));
  };

  // Function to move to the next step
  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  // Function to move to the previous step (for "back" navigation)
  const goToPreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  // NEW: A function to reset all state back to the beginning.
    const resetForm = () => {
        setCurrentStep(1);
        setBookingData(initialBookingData);
    };



  // This function renders the correct step component based on 'currentStep'
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BookingFormStep1
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            goToNextStep={goToNextStep}
          />
        );
      case 2:
        // When we build Step 2, uncomment this line and remove the placeholder
        // return <BookingFormStep2 bookingData={bookingData} updateBookingData={updateBookingData} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
        return (
                <BookingFormStep2
                    bookingData={bookingData}
                    updateBookingData={updateBookingData}
                    goToNextStep={goToNextStep}
                />
            );
      case 3:
        // return <BookingFormStep3 bookingData={bookingData} updateBookingData={updateBookingData} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
        return (
                <BookingFormStep3
                    bookingData={bookingData}
                    updateBookingData={updateBookingData}
                    goToNextStep={goToNextStep}
                />
            );
      case 4:
        // return <BookingFormStep4 bookingData={bookingData} updateBookingData={updateBookingData} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
        return (
                <BookingFormStep4
                    bookingData={bookingData}
                    updateBookingData={updateBookingData}
                    goToNextStep={goToNextStep}
                />
            );
      case 5:
        // return <BookingConfirmation bookingData={bookingData} />;
        return (
                <BookingConfirmation
                    bookingData={bookingData}
                    resetForm={resetForm} // Pass the reset function as a prop
                />
            );
      default:
        return <p>Something went wrong!</p>; // Fallback in case of invalid step
    }
  };
return (
    <div className={styles.reservationsContainer}> {/* Main container for the entire booking page */}
      <BookingProgressBar currentStep={currentStep} /> {/* The progress indicator at the top */}
      <div className={styles.formContentWrapper}> {/* The white box with rounded corners and shadow */}
        {renderStep()} {/* Renders the current step's form component */}
      </div>
    </div>
  );
}

export default Reservations;
