import React from "react";
import DropDown from "../../UI/DropDown/DropDown";
import RequestCall from "./RequestCall";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="NavBar">
        <div>
          <h1 onClick={()=>window.location="/"}>SIBILIZE</h1>
        </div>
        <div className="DropCall">
        <div className="dropDown">
          <DropDown />

        </div>
        {/* <div className="req">
          <RequestCall />

        </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
