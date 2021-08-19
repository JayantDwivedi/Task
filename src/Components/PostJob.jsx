import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../utils/comman";

const PostJob = () => {
  const url = "https://jobs-api.squareboat.info/api/v1/jobs/";

  const history = useHistory();

  const [jobtitle, setJobtitle] = useState();
  const [jobdesc, setJobdesc] = useState();
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
    if (validate(jobtitle, jobdesc, location)) {
      axios
        .post(
          url,
          { title: jobtitle, description: jobdesc, location: location },
          { headers: { Authorization: getToken() } }
        )
        .then((res) => {
          console.log(res);
          history.push("/dashboard");
          setJobdesc("");
          setJobtitle("");
          setLocation("");
          setError("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validate = (jobtitle, jobdesc, location) => {
    if (
      jobtitle === undefined ||
      jobtitle === "" ||
      jobdesc === "" ||
      jobdesc === undefined ||
      location === "" ||
      location === undefined
    ) {
      setError("All fields are mandatory");
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="main-body">
        <h3>Post a job</h3>
        <label htmlFor="jobtitle">
          Job title<sup>*</sup>
        </label>
        <br />
        <input
          type="text"
          className="input-box p-2 my-3 rounded"
          value={jobtitle}
          placeholder="Enter job"
          onChange={(e) => {
            setJobtitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="jobdesc">
          Job Description<sup>*</sup>
        </label>
        <br />
        <textarea
          type="text"
          className="input-box p-2 my-3 rounded"
          rows="5"
          value={jobdesc}
          placeholder="Enter job description"
          onChange={(e) => {
            setJobdesc(e.target.value);
          }}
        />
        <br />
        <label htmlFor="jobtitle">
          Location<sup>*</sup>
        </label>
        <br />
        <input
          type="text"
          className="input-box p-2 my-3 rounded"
          placeholder="Enter location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br />
        <p className="error">{error}</p>
        <button className="btn btn-primary px-4" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </>
  );
};

export default PostJob;
