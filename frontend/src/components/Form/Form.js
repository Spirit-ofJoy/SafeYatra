import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.scss";

function Signup() {
  const username1 = useRef();
  const username2 = useRef();
  const username3 = useRef();
  const phone1 = useRef();
  const phone2 = useRef();
  const phone3 = useRef();

  const navigate = useNavigate();

  const [record, setRecords] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const details = {
      username1: username1.current.value,
      username2: username2.current.value,
      username3: username3.current.value,
      phone1: phone1.current.value,
      phone2: phone2.current.value,
      phone3: phone3.current.value,
    };

    //console.log(details);
    //window.localStorage.setItem("details", JSON.stringify(details));

    setRecords({ ...record, details });
  };

  //console.log(record);

  useEffect(() => {
    console.log(record.details);
    window.localStorage.setItem("record", JSON.stringify(record.details));
  }, [record]);

  navigate("/");

  return (
    <div className="form">
      <div className="formWrapper">
        <div className="formLeft">
          <h2 className="appTitle">SafeYatra</h2>
          <span className="appDesc">
            Hello friend , just trying to make travel safer for you.
          </span>
        </div>

        <div className="formRight">
          <form className="formMain" onSubmit={handleRegister}>
            <input
              className="formInput"
              placeholder="Name of Friend1"
              type="text"
              required
              ref={username1}
            />
            <input
              className="formInput"
              placeholder="Contact of Friend1"
              type="tel"
              required
              ref={phone1}
            />

            <input
              className="formInput"
              placeholder="Name of Friend2"
              type="text"
              required
              ref={username2}
            />
            <input
              className="formInput"
              placeholder="Contact of Friend2"
              type="tel"
              required
              ref={phone2}
            />

            <input
              className="formInput"
              placeholder="Name of Friend1"
              type="text"
              required
              ref={username3}
            />
            <input
              className="formInput"
              placeholder="Contact of Friend3"
              type="tel"
              required
              ref={phone3}
            />

            <button type="submit" className="formButton">
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
