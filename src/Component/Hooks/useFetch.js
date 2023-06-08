import react, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"


const useFetch=(url)=>{
const [data,setData]=useState([]);

useEffect(()=>{
const fetchData= async()=>{
    try {
        const res= axios.get(url);
        setData((await res).data)
    } catch (error) {
        console.log(error)
    }
    
}
fetchData();
},[url])


const reFetch= async()=>{
    try {
        const res= axios.get(url);
        setData((await res).data)
    } catch (error) {
        console.log(error)
    }
    
}

return {data,reFetch};

}

export default useFetch;