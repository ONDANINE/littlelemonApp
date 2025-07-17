import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookingFormStep1 from '../components/BookingForm/BookingFormStep1';
import BookingProgressBar from '../components/BookingForm/BookingProgressBar';
import styles from "./Reservations.module.css";


function Reservations() {
    const [currentStep, setCurrentStep] = useState(1); // State to track the current step (1 to 5)
    const [bookingData, setBookingData] = useState({ // State to hold all booking information
        date: null, // Initialized as null or new Date() based on preference
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
  });
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
        return <p>Step 2: Select Preferred Time (Coming Soon)</p>;
      case 3:
        // return <BookingFormStep3 bookingData={bookingData} updateBookingData={updateBookingData} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
        return <p>Step 3: Select Available Table (Coming Soon)</p>;
      case 4:
        // return <BookingFormStep4 bookingData={bookingData} updateBookingData={updateBookingData} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;
        return <p>Step 4: Fill Information (Coming Soon)</p>;
      case 5:
        // return <BookingConfirmation bookingData={bookingData} />;
        return <p>Step 5: Reservation Confirmed (Coming Soon)</p>;
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
