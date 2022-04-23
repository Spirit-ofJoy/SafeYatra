import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import Navbar from "../components/Navbar/Navbar";

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

  const handleClick = (e) => {};

  return (
    <>
      <Navbar />
      <button
        className="SosButton"
        type="submit"
        onClick={handleClick}
      ></button>
    </>
  );
}

export default HomePage;
