import React from "react";
import SearchDoctor from "./SearchDoctor";

import "../App.css";
import DoctorFilter from "./DoctorFilter";
function Doctors() {
  const [display, setDisplay] = React.useState(false);
  const [formData, setFormData] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Enter Doctor Name</p>
            <input
              type="text"
              placeholder="Enter name to search for Doctor"
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
        Display All Doctors
      </button>
      {display ? <SearchDoctor /> : <DoctorFilter data={formData} />}
    </div>
  );
}

export default Doctors;
