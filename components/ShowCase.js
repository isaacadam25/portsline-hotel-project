import React from 'react';
import { Button } from 'react-bootstrap';
import InputWithIcon from './InputWithIcon';
import Link from 'next/link';
import BookingCase from './BookingCase';

const ShowCase = () => {
  return (
    <div className="showcase">
      <h1 className="title">Welcome To Portsline Hotel and SPA</h1>
      <p className="subtitle">
        We guarantee to offer the world-famous, Deeply Relaxing Quality
        Unforgetable Experience to all our guests
      </p>
      <BookingCase />
      <Link href="/booking" passHref>
        <Button size="lg">BOOK NOW</Button>
      </Link>
    </div>
  );
};

export default ShowCase;
