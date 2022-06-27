import React from "react";
// import { db } from "../firebase";
import Store from "./Store";
import HospitalFilter from "./HospitalFilter";

import "../App.css";
// import Footer from "./Footer";

// import { useState, useEffect } from "react";

function Hospitals() {
  const [display, setDisplay] = React.useState(false);
  const [formData, setFormData] = React.useState("");
  // let choice = "";
  let wasClicked = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    // wasClicked = true;
    // choice = "data";
    console.log(formData);
  };

  // const handleClick = () => {
  //   wasClicked = true;
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Enter Hospital Name</p>
            <input
              type="text"
              placeholder="Enter location to search for hospital"
              value={formData}
              onChange={(e) => {
                setDisplay(false);
                setFormData(e.target.value);
              }}
            />
          </label>
        </fieldset>
        {/* <button type="submit">Search Hospital</button> */}
      </form>
      <button className="green" onClick={() => setDisplay(true)}>
        Display All Hospitals
      </button>
      {display ? <Store /> : <HospitalFilter data={formData} />}
      {/* <HospitalFilter data={formData} /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default Hospitals;
