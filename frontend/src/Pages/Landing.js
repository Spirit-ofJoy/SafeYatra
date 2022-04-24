import React, { useEffect, useState } from "react";
import "./Landing.scss";
// import Navbar from "../components/Navbar/Navbar";
// import back from "./back.jpg";

function HomePage() {
  return (
    <>
      {/* <div class="LandingPage">
        <img src={back} alt={`cover`} />
      </div> */}
      <div id="LandingPage">
        <div className="centerize">
          <h1>
            Safe{" "}
            <a href="/">
              <i class="ri-compass-3-line"></i>
            </a>
            Yatra
          </h1>
          <h2>
            Illuminating the <span>Safest</span> routes
          </h2>
        </div>
        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
}

export default HomePage;
