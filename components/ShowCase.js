import React from 'react';
import { Button } from 'react-bootstrap';
import InputWithIcon from './InputWithIcon';

const ShowCase = () => {
  return (
    <div className="showcase">
      <h1 className="title">Welcome To Portsline Hotel and SPA</h1>
      <p className="subtitle">
        We guarantee to offer the world-famous, Deeply Relaxing Quality
        Unforgetable Experience to all our guests
      </p>
      <div className="showcase-input">
        <InputWithIcon
          type="date"
          placeholder="Check in"
          fontAwesome="calendar"
        />
        <InputWithIcon
          type="date"
          placeholder="Check out"
          fontAwesome="calendar"
        />
        <InputWithIcon type="number" placeholder="Rooms" fontAwesome="bed" />
        <InputWithIcon type="number" placeholder="Guests" fontAwesome="plus" />
      </div>
      <Button size="lg">BOOK NOW</Button>
    </div>
  );
};

export default ShowCase;
