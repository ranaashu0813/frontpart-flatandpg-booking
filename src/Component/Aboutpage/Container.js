import React from "react";
import "./About.css";

const Container = () => {
  return (
    <>
      <div
        className="path"
        style={{ padding: "2rem", height: "25%", backgroundColor: "black" }}
      >
        <div className="path-container">
          <h2 style={{ fontSize: "12px", color: "white" }} >
            {" "}
        <a href="/">Home</a>
          </h2>
        </div>
        <div
          className="path-container2"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2 style={{ color: "white", fontSize: "3rem" }}>ABOUT US</h2>
        </div>
        
      </div>
      <div
        className="whyinfo"
        style={{
          height: "30rem ",
          width: "95vw",
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "6rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem",textTransform:"capitalize"}}>
          Since we couldn't find it for ourselves,{" "}
            <span style={{ color: "skyblue" }}>we made it for you</span>{" "}
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
          Sibilize offers the best accommodations to students who were denied admission 
          to college-provided hostels due to high fees and low occupancy, 
          and provides them with the hostel life that they have missed in local off-campus accommodations.
          </p>
        </div>
        <div>
          <img
            className="ip "
            style={{ width: "30vw", height: "50vh" }}
            src="img.png"
            alt="..."
          ></img>
          
        </div>
      </div>
          <hr />

      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem",
          paddingTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <img
            className="ip "
            style={{ border:"1rem",width: "23rem", height: "20rem", marginTop: "2rem" }}
            
            src="img12.png"
            alt="..."
          ></img>
        </div>
        <div
        className="mm"
           style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            marginLeft:"2rem"
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem",textTransform:"capitalize" }}>
          Tailored to your {" "}
            <span style={{ color: "skyblue" }}>needs</span>
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
          Sibilize provides the best accommodations tailored to the needs of working professionals and institute students.
          </p>
          <hr/>
        </div>
      </div>

      {/* food area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem",textTransform:"capitalize" }}>
          Professionals are here to 
            <span style={{ color: "skyblue" }}> assist you.</span>{" "}
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
          Sibilize accommodations include all amenities, as well as a professional and a team of highly trained staff to assist.
          </p>
        </div>
        <div>
          <img
            className="ipf "
            style={{
              width: "25rem",
              height: "28rem",
              marginTop: "2rem",
              marginLeft: "8rem",
            }}
            src="pgfood.png"
            alt="..."
          ></img>
        </div>
      </div>
<hr />
      {/* chill area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "8rem",
        }}
      >
        <div>
          <img
            className="ipp "
            style={{
              width: "25rem",
              height: "20rem",
              marginTop: "2rem",
              marginRight: "6rem",
            }}
            src="chillarea.png"
            alt="..."
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem",textTransform:"capitalize" }}>
          empowering your <span style={{ color: "skyblue" }}>  lifestyle </span>{" "}
           
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
          Sibilize aims to empower youth throughout the growth of their life, from their teen to adult phase
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
