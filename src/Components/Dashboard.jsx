import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/dash.css";
import { getToken, isLoggedin } from "../utils/comman";
import Pagination from "./Pagination";
import { FaHome } from "react-icons/fa";

export default function Dashboard() {
  const url = "https://jobs-api.squareboat.info/api/v1/jobs";

  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(7);
  const [jobs, setJobs] = useState([]);
  const [vaccancy, setVaccancy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jobid, setJobid] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(url);
      const jsonres = await res.json();
      setJobs(jsonres.data);
      console.log(jobs.id);
      setJobid(jsonres.data.id);

      console.log(jsonres.data.id);
    };

    fetchAPI();
  }, []);

  const urlparticipant = `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobid}/candidates`;

  const viewParticipant = async () => {
    const participant = await fetch(urlparticipant, {
      Authorization: getToken,
    });
    const jsonparticipant = await participant.json();
    console.log(jsonparticipant);
  };

  // pagination
  const indexoflastcard = currentpage * postperpage;
  const indexoffirstcard = indexoflastcard - postperpage;
  const currentcard = jobs.slice(indexoffirstcard, indexoflastcard);
  console.log(currentcard);

  // paginate
  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  return (
    <>
      <div className="dash-main container">
        <Link to="/" className="text-light">
          <FaHome />
          Home
        </Link>
        <h4 className="text-light my-4">Job posted</h4>
        <div className="">
          {currentcard.map(function (ele) {
            return (
              <div
                className="m-4 p-4 bg-light rounded shadow-sm job-card"
                key={ele.id}
              >
                <h4>{ele.title}</h4>
                <p>{ele.description}</p>
                <div className="d-flex justify-content-between">
                  <p className="">
                    <i className="fas fa-map-marker-alt text-primary px-1"> </i>
                    {ele.location}
                  </p>

                  <button
                    className="btn text-dark participants p-2 rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={viewParticipant}
                  >
                    View participant
                  </button>
                  {/* Model  */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Application for job
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body bg-light m-4">
                          <h3 className="text-center">No applicant applied</h3>
                          <br />
                          <i className="fa fa-file-alt icon"></i>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          postperpage={postperpage}
          totalPost={jobs.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
