import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import ReservationForm from "./ReservationForm.js";
import { createReservation } from "../utils/api.js";

export default function ReservationNew() {
  let initalState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };
  let [reservation, setReservation] = useState({
    ...initalState,
  });
  const history = useHistory();
  const changeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "people") {
      setReservation({
        ...reservation,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setReservation({
        ...reservation,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");

    const abortController = new AbortController();

    try {
      await createReservation(reservation, abortController.signal);
      history.push(`/dashboard?date=${reservation.reservation_date}`);
    } catch (err) {
      throw "something bad happened";
    }
    return () => abortController.abort();
  };
  return (
    <section>
      To make a Reservation:
      <ReservationForm
        reservation={reservation}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </section>
  );
}
