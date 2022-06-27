import React from "react";
import { db } from "../firebase";

import icon from "../images/icons8-location-30.png";

import { Link } from "react-router-dom";

import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useState, useEffect } from "react";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: 700,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SearchDoctor() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [age, setAge] = React.useState("");
  const [contact, setContact] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [divClicked, setDivClicked] = useState(false);
  const [day, setDay] = useState("");

  const toggleClicked = () => setDivClicked((value) => !value);

  const Confirm = (event) => {
    if (name !== "" && sex !== "" && age !== "" && contact !== "" && day!=="") {
      setOpen(false);
      event.preventDefault();
      alert("Appointment Confirmed");
    } else {
      // setOpen(false);
      event.preventDefault();
      alert("Enter all informations!");
    }
  };
  useEffect(() => {
    db.collection("Hospitals").onSnapshot((snapshot) => {
      setHospitals(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          hospital: doc.data(),
        }))
      );
    });
    // fetchHospitals();
  }, []);
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <h1>Online Healthcare management</h1>
              <h2>Appointment Form</h2>
              {/* <img 
            className= "app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
            alt="" /> */}
            </center>
            <Input
              style={{ width: "100%" }}
              placeholder="FullName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              style={{ width: "100%" }}
              placeholder="Age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              style={{ width: "100%" }}
              placeholder="Sex"
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              style={{ width: "100%" }}
              placeholder="Contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              style={{ width: "100%" }}
              placeholder="Day"
              type="text"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <Button type="submit" onClick={Confirm}>
              Confirm
            </Button>
          </form>
        </div>
      </Modal>
      {hospitals.map(({ hospital }) => (
        <div className="hospitals" onClick={toggleClicked}>
          <div id="hospital">
            <h1>{hospital.Doctor}</h1>
            <h2>Works at {hospital.Name}</h2>
            <h3>{hospital.Contacts}</h3>
            {divClicked ? (
              <Button onClick={() => setOpen(true)}>Book Appointment</Button>
            ) : (
              console.log("")
            )}
          </div>
          <Link to={{ pathname: hospital.Directions }} target="_blank">
            <div id="map">
              <div id="mapImg">
                <img src={icon} alt="img" />
              </div>
              <div id="mapInfo">
                <h3>Show Map Location</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchDoctor;
