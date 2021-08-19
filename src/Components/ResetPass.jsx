import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CSS/form.css";

const ResetPass = () => {
  const location = useLocation();

  const [newpass, setNewpass] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log(location.token);
  }, [location]);

  const handleSubmit = () => {
    if (validate(newpass, confirmpass)) {
      setError("");
      setConfirmpass("");
      setNewpass("");
    }
  };

  const validate = (newpass, confirmpass) => {
    if (
      newpass == undefined ||
      confirmpass == undefined ||
      newpass == "" ||
      confirmpass == ""
    ) {
      setError("");
      setError("All field is mandatory");
    } else if (newpass !== confirmpass) {
      setError("");
      setError("Enter same password in both");
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="main-body">
        <h3>Reset Password</h3>
        <p>Enter your password below</p>
        <label htmlFor="pass">New password</label>
        <br />
        <input
          type="password"
          value={newpass}
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your password"
          onChange={(e) => {
            setNewpass(e.target.value);
          }}
        />
        <br />
        <label htmlFor="confirmpass">Confirm new password</label>
        <br />
        <input
          type="password"
          value={confirmpass}
          className="input-box p-2 my-3 rounded"
          placeholder="Enter your password"
          onChange={(e) => {
            setConfirmpass(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <div className="text-center">
          <button className="btn btn-primary px-4" onClick={handleSubmit}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
