import React, { useEffect, useState } from "react";
import Cards from "../Card/Cards";
import SimpleMap from "../../UI/Maps/GoogleMaps";
import "./Page.css";
import Mainnavbar from "../../Header/Mainnavbar";
import Navbar from "../../Header/Navbar";
import Footer from "../../footer/down_part";
import Filteritem from "../../filter/Filteritem";



const Page = () => {
const [data,setData]=useState([]);
const[pgData1,setPgData1]=useState("");

useEffect(()=>{
  window.scrollTo({top:0,left:0,behavior:"smooth"})
})
  
  return (
    <>
      <Mainnavbar />
      
      <Filteritem/>
      <div className="Container1">
        <div className="Container2">
          <div className="card">
            <Cards onData={setData} 
             pgData1={pgData1}
            />
          </div>
          <div
            className="Map"
            style={{ position: "sticky", height: "98vh" ,marginBottom:"10px"}}
          >
            <SimpleMap  data1={data} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
