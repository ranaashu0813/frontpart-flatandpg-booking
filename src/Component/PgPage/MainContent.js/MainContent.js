import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/down_part";
import ReserveModal from "../../ListPage/Card/ReserveModal";
import ScheduleModal from "../../ListPage/Card/ScheduleModal";
import Crousel from "../../UI/Crousel/Crousel";
import SimpleMap from "../../UI/Maps/GoogleMaps";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";
import SmoothScroll from "../SmoothScroll/SmoothScroll";
import "./mainContent.css";
import { useState } from "react";
import axios from "axios";

function MainContent() {

  const location1 =useLocation();
  

   const id=(location1.pathname).split("/")[2];
  

   const[singlePg,setSinglePg]=useState([]);

   useEffect(()=>{
       apiData();
       },[]) 

   const apiData =()=>{
       axios.get(`http://localhost:1234/pg/${id}`).then(res=>{
     setSinglePg(res.data);
     
     }).catch(error=>{
       console.log(error);
     })
   }
  return (
    <>
      <div className="item-container">
      <div style={{marginLeft:"20px",marginRight:"20px"}}>
        <Navbar />

      </div>
        <div style={{backgroundColor:"#ECECEC "}}>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "50px" }}
        >
          <div style={{ display: "flex", width: "100%", gap: "0px" }}>
            <div style={{ flex: "2", marginTop: "30px" }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h1>{singlePg.title}</h1>
              <Photo
                img={singlePg.img_array}
              />

            </div>
              <p>{singlePg.location}</p>
              <p>starts from</p>
              <p>Rs.{singlePg.price}</p>
              <p>
                *Denotes starting price (exclusive of GST) for 7-9 months’ stay.
                Prices may vary with tenure, room occupancy, and attributes.
              </p>
              <ReserveModal />
              <ScheduleModal />
            </div>
            <div
              style={{
                flex: "2",
                position: "sticky",
                padding: "10px",
                top: "0",
              }}
            className="Crousel1">
              <Crousel
              img={singlePg.img_array} />
            </div>
          </div>
        </div>
        </div>
        <SmoothScroll 
           details={singlePg.details}
           amenities={singlePg.Amenities}
           food={singlePg.food_menu}
           occupancy={singlePg.occupancy}
        />
      </div>
     
      <div style={{marginTop:"5rem"}}>
      <Footer/>

      </div>
    </>
  );
}

export default MainContent;
