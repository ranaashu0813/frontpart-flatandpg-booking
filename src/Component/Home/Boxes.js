import React, { useState ,useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "./Home.css"
import axios from "axios";
const Boxes = () => {
const navigate= useNavigate();


  const [searchPg ,setSearchpg]=useState("");
  const[pgdata,setPgData]=useState([]);
const handleSearch=(searchTerm)=>{


  if(searchTerm=='') alert('fill proper data')
  else  navigate("/pg" ,{state:{searchPg}});
}
useEffect(()=>{
  apiData();
  },[])
  
const apiData =()=>{
  axios.get("http://localhost:1234/pg").then(res=>{
setPgData(res.data);

}).catch(error=>{
  console.log(error);
})
}

  return (
    <>
    <div className="search">

    <input type="text" className="input" value={searchPg} style={{width:"40vw" ,height:"8vh"}}  onChange={(e)=>setSearchpg(e.target.value)}
     placeholder="Enter college/office/locality/city" />
    <button className="btn3" onClick={()=>handleSearch(searchPg)} style={{width:"8rem" ,height:"3rem",color:"white", backgroundColor:"black",marginLeft:"1rem"}}>Search</button>
    <div className="ser">
      
      {pgdata.filter(item=>{
        const searchTerm=searchPg.toLowerCase();
        const location=item.location.toLowerCase();

        return searchTerm && location.includes(searchTerm) && location!==searchTerm;
      })
      .map((e)=>(
        <div onClick={()=>{
          setSearchpg(e.location)
        }}>
            {e.location}

        </div>

      ))}
    </div>
    </div>
    
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "3rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          
          boxShadow: "12px 12px 2px 1px rgba(8, 8, 11, 0.2)",
             }}
      >

      
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              style={{ height: "22rem", width: "15rem", borderRadius: "20px" }}
              src="building.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                }}
                src="img1.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img2.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div
          className="box-text"
          style={{ paddingLeft: "2rem", paddingTop: "5rem",width:"30vw" }}
        >
          <h3>SCHEDULE A VIRTUAL VISIT RIGHT NOW!</h3>
          <p>
          Visit the accommodation virtually, without the hassle of wandering
           around in the scorching sun, and gain an incredible understanding of the accommodation, just like an offline visit.
          </p>
        </div>
      </div>

      <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "1rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          boxShadow: "-23px 23px 0px 1px rgba(8, 8, 11, 0.2)",
        }}
      >
        <div
          className="box-text"
          style={{ paddingRight: "2rem", paddingTop: "5rem",width:"30vw" }}
        >
          <h3>TAILORED TO THE NEEDS OF BOTH STUDENT & WORKING PROFESSIONALS</h3>
          <p>
          Sibilize offers the best accommodation designed
           to the needs of both students and working professionals, which include all necessary amenities at a value-packed cost.
          </p>
        </div>
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div >
        <img style={{height: "22rem", width:"15rem",borderRadius:"20px"}} src='building.png' alt=''/>
        </div> */}
          <div style={{ display: "flex", padding: "12px" }}>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                  marginTop: "4rem",
                }}
                src="img.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "15rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img12.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      
    </div>
      
    </>
  );
};

export default Boxes;
