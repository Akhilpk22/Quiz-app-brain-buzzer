import React from "react";
import { Link } from "react-router-dom";

import './Landing.css';

function Landing() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#2c514e" }}
        className=" d-flex justify-content-center align-items-center container-fluid "
      >
        <div className=" w-100 me-5">
          <h1 className=" text-white text-center mt-5">world football day </h1>
          <h1 className=" text-white  text-center mt-2 animate__animated animate__slideInDown">Quiz competition </h1>
          <div className="mt-5  mb-5  d-flex justify-content-center  align-items-center ">
            <button className=" w-25  btn bg-black text-white p-2   rounded-5 ">
              <Link
                style={{ textDecoration: "none"}}
                to={"/Foodball"}
               
              >
               <h1 className="text-white mt-2 animate__animated animate__flipInX"> start</h1>
              </Link>
            </button>
          </div>
          <div className="d-flex justify-content-start">
            <Link style={{textDecoration:'none'}} to={"/"}><button  className="button-back-to-home animate__animated  animate__fadeInLeft">Back To Home</button></Link>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Landing;
