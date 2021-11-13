import React from 'react';
import InputWithIcon from './InputWithIcon';

const BookingCase = () => {
  return (
    <div className="booking-case">
      <InputWithIcon label="Check In" type="date" fontAwesome="" />
      <InputWithIcon type="date" label="Check Out" fontAwesome="" />
      <InputWithIcon
        label="Room Type"
        type="select"
        placeholder="Room Type"
        fontAwesome=""
      />
      <InputWithIcon
        label="Number of guest(s)"
        type="number"
        placeholder="Number of Guests"
        fontAwesome=""
      />
      <button className="book-case-button">Book Now</button>
    </div>
  );
};

export default BookingCase;
