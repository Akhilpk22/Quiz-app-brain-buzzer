import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh",backgroundColor:"#2c514e  " }}
        className=" d-flex justify-content-center align-items-center container-fluid "
      >

        <div className="">
          <h1 style={{fontSize:'60px',color:"white"}} className="fw-bolder animate__animated animate__bounce ">Brain Buzzer</h1>

          <Link style={{textDecoration:'none'}} to={'/Landing'}><h3 className="text-center mt-5 text-white ">lest's <span style={{color:'black',fontSize:'40px'}}>start</span></h3></Link>
          
        </div>
      </div>
    </>
  );
}

export default Home;
