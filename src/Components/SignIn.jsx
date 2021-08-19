import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { setUserSession } from "../utils/comman";
import "./CSS/form.css";

export default function SignIn() {
  // const base_url = process.env.BASE_URL;
  const url = "https://jobs-api.squareboat.info/api/v1//auth/login";

  const history = useHistory();

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const handleSubmit = (props) => {
    if (validate(email, pass)) {
      axios
        .post(url, { email: email, password: pass })
        .then((response) => {
          // console.log(response);
          console.log("Sucess");

          setEmail("");
          setPass("");
          setError("");
          setUserSession(response.data.data.token);
          // console.log("token " + response.data.data.token);
          history.push("/dashboard");
        })
        .catch((err) => {
          setError("Something went wrong!");
        });
    }
  };

  const emailRegex = /\S+@\S+\.\S+/;

  function validate(email, pass) {
    if (
      email === "" ||
      email === undefined ||
      pass === "" ||
      pass === undefined
    ) {
      setError("All feild is mandatory");
    } else if (!emailRegex.test(email)) {
      setError("Enter a valid email");
    } else {
      return true;
    }
  }

  return (
    <div className="main-body">
      <h3>Login</h3>
      <label htmlFor="Email address">Email address</label>
      <br />
      <input
        className="input-box p-2 my-3 rounded"
        value={email}
        type="text"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <div className="py-2">
        <label htmlFor="Password" className="d-inline-block">
          Password
        </label>

        <Link
          to="/forgot-pass"
          className="d-inline-block link-form create-acc float-right"
        >
          Forgot password
        </Link>
      </div>

      <input
        className="input-box p-2 my-3 rounded"
        value={pass}
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <p className="error">{error}</p>
      <div className="text-center">
        <button className="btn btn-primary px-4" onClick={handleSubmit}>
          Login
        </button>
      </div>
      <div className="form-end-div">
        <p className="new-job">New to jobs? </p>
        <Link to="/signup" className="link-form create-acc px-1">
          Create an account
        </Link>
      </div>
    </div>
  );
}
