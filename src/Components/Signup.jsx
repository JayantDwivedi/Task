import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CSS/form.css";

const Signup = () => {
  const url = "https://jobs-api.squareboat.info/api/v1/auth/register";

  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [error, setError] = useState();
  const [skills, setSkills] = useState();

  const emailRegex = /\S+@\S+\.\S+/;

  const handleSubmit = () => {
    if (validation(name, email, pass, confirmpass, skills)) {
      axios
        .post(url, {
          email: email,
          userRole: 0,
          password: pass,
          confirmPassword: confirmpass,
          name: name,
          skills: skills,
        })
        .then((response) => {
          setError(response.message);
          history.push("/login");
          setConfirmpass("");
          setPass("");
          setEmail("");
          setName("");
          setSkills("");
          setError("");
        })
        .catch((err) => {
          if (err.code == 422) {
            setError(err.message);
          }
          console.log(err.code);
        });
    }
  };

  const validation = (name, email, pass, confirmpass, skills) => {
    if (
      name === undefined ||
      name === "" ||
      email === undefined ||
      email === "" ||
      pass === undefined ||
      pass === "" ||
      confirmpass === undefined ||
      confirmpass === "" ||
      skills === undefined ||
      skills === ""
    ) {
      setError("All feild are mandatory");
    } else if (pass !== confirmpass) {
      setError("Both password must be same");
    } else if (!emailRegex.test(email)) {
      setError("Invalid email");
    } else if (pass.length < 6) {
      setError("Password must be more than 6 character");
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="main-body">
        <h3>SignUp</h3>
        <p>
          I am a<sup>*</sup>
        </p>
        <Link to="/signup" className="btn btn-primary active link-btn">
          <i className="fas fa-search px-2"></i>Recruiter
        </Link>
        <Link to="/candidate-signup" className="btn btn-primary link-btn">
          <i className="fas fa-users px-2"></i>Candidate
        </Link>
        <br />
        <label htmlFor="text" className="py-3">
          Fullname<sup>*</sup>
        </label>
        <input
          type="text"
          className="input-box p-2 my-2 rounded"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">
          Email<sup>*</sup>
        </label>
        <input
          type="email"
          className="input-box p-2 my-3 rounded"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <div className="row">
          <div className="col-lg-5">
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              className="input-box p-2 my-3 rounded"
              value={pass}
              placeholder="Enter your password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <label htmlFor="password">
              Confirm password<sup>*</sup>
            </label>
            <input
              type="password"
              className="input-box p-2 my-3 rounded"
              value={confirmpass}
              placeholder="Enter your password"
              onChange={(e) => {
                setConfirmpass(e.target.value);
              }}
            />
            <br />
          </div>
        </div>
        <label htmlFor="text">
          Skills<sup>*</sup>
        </label>
        <input
          type="text"
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your skills"
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <div className="form-end-div">
          <p className="new-job">New to jobs? </p>
          <Link to="/login" className="link-form create-acc px-1">
            Login
          </Link>
        </div>
        <div className="text-center">
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
