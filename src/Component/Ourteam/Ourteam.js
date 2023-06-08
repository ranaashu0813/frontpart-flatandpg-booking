import React from "react";
import Mainnavbar from "../Header/Mainnavbar";
import Footer from "../footer/down_part";
import "./Ourteam.css";
const Ourteam = () => {
    return (
      <>
      <Mainnavbar/>
      
      <div className="outer" style={{height:"20em", backgroundColor:"black",display:"flex", justifyContent:"center"}}>
     <h1 style={{color:"white", fontSize:"bolder",marginTop:"100px"}}>OUR TEAM</h1>
      </div>
      <div className="cardouter" style={{display:"flex",margin:"10px"}}>
        <div className="card" style={{width: "15rem", height:"30em", borderRadius:"8px",margin:"16px"}}>
    <img src="manav.png" className="card-img-top" alt="..." style={{height:"20em", }}/>
    <div className="card-body">
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<div>
      <h5 className="card-title" style={{ fontWeight:"bold"}}>Manav Ajai Sonkar</h5>

</div>
<div>

      <p className="card-text" style={{ fontWeight:"initial"}}>Founder & CEO</p>
</div>

    </div>
      
    </div>
  </div>
  
  <div className="card" style={{width: "15rem",height:"30em", borderRadius:"8px",margin:"16px"}}>
    <img src="mahendra.png" className="card-img-top" alt="..." style={{height:"20em"}}/>
    <div className="card-body">
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

    <div>
      <h5 className="card-title"style={{ fontWeight:"bold"}}>Mahendra Tiwari</h5>

    </div>
    <div>
      <p className="card-text" style={{ fontWeight:"initial"}}> Co Founder & CFO</p>

    </div>
    </div>
      
    </div>
  </div>
  
  <div className="card" style={{width: "15rem",height:"30em", borderRadius:"8px",margin:"16px"}}>
    <img src="jatin.png" className="card-img-top" alt="..." style={{height:"20em"}}/>
    <div className="card-body">
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div>
      <h5 className="card-title" style={{ fontWeight:"bold"}}> Jatin Chand</h5>
      </div>
      <div>
      <p className="card-text" style={{ fontWeight:"initial"}}>Chief Operations Officer</p>
      </div>
    </div>
    </div>
  </div>
  </div>
  <Footer/>
      </>
    )
  }
  
  export default Ourteam
  