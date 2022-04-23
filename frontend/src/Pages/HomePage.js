import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import Navbar from "../components/Navbar/Navbar";
import DisplayMap from "../components/Map/DisplayMap";
import axios from "axios";

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
      <DisplayMap />
      <button
        className="SosButton"
        type="submit"
        onClick={handleClick}
      ></button>
    </>
  );
}

export default HomePage;
