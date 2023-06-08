import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import { useFilter } from "../../../Store";
import axios from "axios";

function Cards({onData,pgData1}){
    const[pgdata,setPgData]=useState([]);
    const location=useLocation();
   
        onData(pgdata);
  
    const [destination,setDestination]=useState(location.state.searchPg )
   
    useEffect(()=>{
        apiData();
        
        },[])
      
        

    const apiData =()=>{
        axios.get(`http://localhost:1234/pg?location=${destination}`).then(res=>{
      setPgData(res.data);
     
      }).catch(error=>{
        console.log(error);
      })
    }

    const {filter:{sort_btn,gender,price_range}, dis_filter} = useFilter();

    const filterProducts=()=>{
        let newpgdata = pgdata; 
        
        if(sort_btn){
            newpgdata = newpgdata.sort((a,b)=>{
               return sort_btn==="low" ? a.price-b.price :b.price-a.price
            })
        }


         const min = price_range[0]; 
         const max = price_range[1]; 
        if(price_range){
            newpgdata = newpgdata.filter((i)=>i.price>=min && i.price<=max )
        }

       
        if(gender){
            newpgdata = newpgdata.filter(i=> gender.length>0 ? gender.includes(i.gender.toLowerCase()):i)

         
        }
        
        return newpgdata
    }

    return(
        <>
            {filterProducts().map((pgdata)=>{
                return <Card   title={pgdata.title}
                    location={pgdata.location}
                    price={pgdata.price}
                    Amenities={pgdata.Amenities}
                    img={pgdata.cover_img}
                    key1={pgdata._id}
                    key={pgdata._id}
                    gml ={pgdata.gml}
                    booked={pgdata.booked}
                />
            })}
           
        </>
    )
}

export default Cards;