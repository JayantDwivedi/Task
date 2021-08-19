import React from "react";
import { Link } from "react-router-dom";
import "./CSS/landing.css";

import liva from "../assets/liva.png";
import ideaa from "../assets/ideaa.png";
import kanba from "../assets/kanba.png";
import goldline from "../assets/goldline.png";
import solaytic from "../assets/solaytic.png";
import velocity9 from "../assets/velocity9.png";
import ztos from "../assets/ztos.png";
import hexa from "../assets/hexa.png";
import amara from "../assets/amara.png";

import lady from "../assets/working-lady.jpg";

const Landing = () => {
  return (
    <div className="container landing-container">
      <div className="row">
        <div className="col-lg-4">
          <h1 className="text-light">Welcome to</h1>
          <h1 className="text-light">
            My<span className="text-primary">Jobs</span>
          </h1>
          <br />
          <Link to="/login" className="btn btn-primary px-4 py-2 mb-4 ">
            Get started
          </Link>
        </div>
        <div className="col-lg-8">
          <img
            className="img-fluid rounded lady-img"
            src={lady}
            alt="working lady"
          />
        </div>
      </div>
      <div>
        <h4 className="my-3">Why us</h4>
      </div>

      <div className="row card-row">
        <div className="col-lg-4 p-4 card">
          <h4 className="text-color-blue">Get More Visibility</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias,
            quos nemo quas harum sequi.{" "}
          </p>
        </div>
        <div className="col-lg-4 p-4 card">
          <h4 className="text-color-blue">Organise your candidate</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias,
            quos nemo quas harum sequi.{" "}
          </p>
        </div>
        <div className="col-lg-4 p-4 card">
          <h4 className="text-color-blue">Verify their abilities</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias,
            quos nemo quas harum sequi.{" "}
          </p>
        </div>
      </div>

      <h4 className="my-4 py-4">Componies who trust us</h4>
      <div className="comp-img">
        <img className="landing-comp-img" src={solaytic} alt="liva" />
        <img className="landing-comp-img " src={kanba} alt="liva" />
        <img className="landing-comp-img " src={hexa} alt="liva" />
        <img className="landing-comp-img " src={ztos} alt="liva" />
        <img className="landing-comp-img " src={amara} alt="liva" />
      </div>
      <div className="comp-img">
        <img className="landing-comp-img" src={goldline} alt="liva" />
        <img className="landing-comp-img" src={ideaa} alt="liva" />
        <img className="landing-comp-img" src={liva} alt="liva" />
        <img className="landing-comp-img" src={velocity9} alt="liva" />
      </div>
    </div>
  );
};

export default Landing;
