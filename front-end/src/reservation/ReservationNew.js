import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

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
  const changeHandler = (event) => {
    if (event.target.name === "people") {
      setReservation({
        ...reservation,
        [event.target.name]: Number(event.target.value),
      });
    } else {
      setReservation({
        ...reservation,
        [event.target.name]: event.target.value,
      });
    }
  };
  return <section>hiiii</section>;
}
