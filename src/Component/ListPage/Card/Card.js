import React from "react";
import "./Card.css";


import ReserveModal from "./ReserveModal";
import ScheduleModal from "./ScheduleModal";

export default function Card(props) {

  return (
    <>
  
      <div className="CardContainer" >
        <img
          src={props.img}
          alt=""
          className="CardImg"
          onClick={()=>window.location=`/pg/${props.key1}`}
        />

          
        <div className="CardDis">
          <div className="title" onClick={()=>window.location=`/pg/${props.key1}`}>
            <h1 className="mb-0">{props.title}</h1>
            <span>{props.location}</span>
          </div>
          <div className="details">
            <span>details</span>
          </div>
          <div className="amenities">
           {props.Amenities?.split(',').map((obj,i)=>{
            return <span>{props.Amenities?.split(',')[i]}</span>
           })}
          </div>
          <div>
            <a href={props.gml}>view directions</a>
          </div>
          <h1 style={{color:"red"}}>
            {props.booked}
          </h1>
        
        </div>

        <div className="CardPrice">
          <div className="price-section">
            <div>
              <span style={{ color: "lightgray", fontSize: "15px" }}>
                starts from
              </span>
              <br></br>
              <span
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bolder",
                  fontSize: "30px",
                }}
              >
                Rs. {props.price}
              </span>
            </div>
            <div>
           </div>
          </div>
          <div>
            <ScheduleModal title={props.title} />
            <ReserveModal/>
          </div>
        </div>
      </div>
    </>
  );
}
