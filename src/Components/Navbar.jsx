import React from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";
import { isLoggedin, removeUserSession } from "../utils/comman";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loginstate, setLoginstate] = useState(isLoggedin());
  const [btntext, setBtntext] = useState("Login/Signup");

  useEffect(() => {
    setBtntext("Logout");
  }, []);

  return (
    <>
      <nav class="navbar">
        <div class="container">
          <Link to="/" class="navbar-brand">
            My<span className="light-blue">Jobs</span>
          </Link>
          {loginstate ? (
            <>
              {loginstate && (
                <Link to="/dashboard/jobpost" class="d-flex">
                  <button className="btn">
                    {loginstate ? "Jobpost" : "Login/Signup"}
                  </button>
                </Link>
              )}

              <Link to="/" class="d-flex">
                <button className="btn" onClick={removeUserSession}>
                  {loginstate ? "Logout" : "Login/Signup"}
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" class="d-flex">
                <button className="btn">
                  {loginstate ? "Logout" : "Login/Signup"}
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
