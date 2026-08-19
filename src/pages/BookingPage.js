import React from "react";
import Heading from "../components/common/Heading";
import BookingForm from "../components/home/Book";

export default function Booking() {
  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <BookingForm />
    </>
  );
}
