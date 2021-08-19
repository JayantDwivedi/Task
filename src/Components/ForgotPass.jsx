import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { getToken } from "../utils/comman";

import "./CSS/form.css";

export default function ForgotPass() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [tok, setTok] = useState();

  const emailRegex = /\S+@\S+\.\S+/;

  const url = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`;

  const handleSubmit = () => {
    if (validate(email)) {
      axios
        .get(url)
        .then((res) => {
          // console.log(res);
          console.log(res.data.token);
          alert(tok);
          history.push({
            pathname: "/reset-pass",
            state: { token: tok },
          });

          setEmail("");
          setError("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validate = (email) => {
    if (email == undefined) {
      setError("");
      setError("Feild is mandatory");
    } else if (!emailRegex.test(email)) {
      setError("");
      setError("Enter a valid email");
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="main-body">
        <h3>Forgot Password?</h3>
        <p>
          Enter the email associated with your account and we'll send you
          instruction to reset your password
        </p>
        <label htmlFor="email">
          Email address<sup>*</sup>
        </label>
        <br />
        <input
          value={email}
          type="email"
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <div className="text-center">
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
