import {useContext,createContext,useReducer} from "react";
import { reducerFun } from "./Reducer.js";

// create context
//create provider 
//usecontext


const filterContext = createContext(); 

const Store = ({children})=>{
  
 
  const[filter, dis_filter] = useReducer(reducerFun,{
    sort_btn : null,
    gender: [],
    price_range: [2000,20000]
  })
  
    return <filterContext.Provider value={{filter, dis_filter}} >
        {children}
        </filterContext.Provider>
}

export const useFilter = () =>useContext(filterContext); 

export default Store;