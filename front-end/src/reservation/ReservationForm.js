import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

export default function ReservationForm({
  reservation,
  changeHandler,
  submitHandler,
}) {
  const history = useHistory();

  return (
    <div>
      Fill out this Form:
      <form onSubmit={submitHandler}>
        <fieldset>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              required={true}
              value={reservation.first_name}
              onChange={changeHandler}
              maxLength="150"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
