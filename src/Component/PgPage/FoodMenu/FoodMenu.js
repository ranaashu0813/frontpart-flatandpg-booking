import React, { useEffect } from "react";
import { Data } from "./Food";
import { useState } from "react";
import "./FoodMenu.css";

const FoodMenu = (props) => {
  const [item, setItem] = useState(Data);
   
   const default_food=[];
    useEffect(()=>{

      setItem(default_food);
    },[])

  const day1 = (cat) => {
    const updateitem = props.food?.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
    console.log(item);
  };

  const day2 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    }); 
    setItem(updateitem);
  };

  const day3 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day4 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day5 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day6 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day7 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };
  return (
    <>
   
    <div className="Food-menu">
        <div className="buttons">
          <button  className="btn1" onClick={() => day1("day1")} >
            day1
          </button>
          <button className="btn1" onClick={() => day2("day2")}>
            day2
          </button>
          <button className="btn1" onClick={() => day3("day3")}>
            day3
          </button>
          <button className="btn1" onClick={() => day4("day4")}>
            day4
          </button>
          <button className="btn1" onClick={() => day5("day5")}>
            day5
          </button>
          <button className="btn1" onClick={() => day6("day6")}>
            day6
          </button>
          <button className="btn1" onClick={() => day7("day7")}>
            day7
          </button>
        </div>
        <div className="Menu">
          <div className="breakFast">
            <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline",marginBottom:"0.5rem"}}>
              <h6>BREAKFAST</h6>
            </div>
            {item
              .filter((u) => u.type.includes("breakfast"))
              .map((a) => {
                return (
                  <div>
                    {a.name.map((optn) => (
                      <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{optn}</div>
                    ))}
                  </div>
                );
              })}
          </div>
          <div className="Lunch">
            <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline" ,marginBottom:"0.5rem"}}>
              <h6>LUNCH</h6>
            </div>
            {item
              .filter((u) => u.type.includes("lunch"))
              .map((a) => {
                return <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{a.name}</div>;
              })}
          </div>
        </div>
       
        <div className="Dinner">
          <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline" ,marginBottom:"0.5rem"}}>
            <h6>DINNER</h6>
          </div>
          {item
            .filter((u) => u.type.includes("dinner"))
            .map((a) => {
              return <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{a.name}</div>;
            })}
        </div>
      </div>
    
      
    </>
  );
};

export default FoodMenu;
