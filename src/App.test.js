import { fireEvent, render, screen } from '@testing-library/react';
import BookingFormStep1 from './components/BookingForm/BookingFormStep1';
import Reservations from './pages/Reservations';

test('Renders the BookingForm heading', () => {
  render(<BookingFormStep1 />);
  const headingForm = screen.getByText("Select date and no. of guests");
  expect(headingForm).toBeInTheDocument();
});
