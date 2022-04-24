import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

import { Link } from "react-router-dom";

function HomePage() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const details = JSON.parse(window.localStorage.getItem("record"));
    //console.log(record);
    if (record) {
      setRecord(details);
    }
  }, []);

  //console.log(record);
  //console.log(record.phone1);

  const handleClick = (e) => {
    try {
      axios.post(
        "http://localhost:8180/api/details/info?username1=" +
          record.username1 +
          "&phone1=" +
          record.phone1 +
          "&username2=" +
          record.username2 +
          "&phone2=" +
          record.phone2 +
          "&username3=" +
          record.username3 +
          "&phone3=" +
          record.phone3
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="midContainer">
          <span className="title">SafeYatra</span>
          <h4>You are loved!</h4>
          <br />
          <h5>
            Somebody is waiting for your safe return. What a waste would it be
            to choose the fastest way rather than the safest way. Be
            wise!..Choose Wise!
          </h5>

          <Link className="buttonLink" to="/map">
            <button className="forwardButton">Safe Route</button>
          </Link>
        </div>

        <button
          className="SosButton"
          type="submit"
          onClick={handleClick}
        ></button>
      </div>
    </>
  );
}

export default HomePage;
