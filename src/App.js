
import React from "react";
import Page from "./Component/ListPage/page/page";
import MainContent from "./Component/PgPage/MainContent.js/MainContent";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import About from "./Component/Aboutpage/About";
import "./App.css"
import Ourteam from "./Component/Ourteam/Ourteam";
import Franchise from "./Component/Franchise/Franchise/Franchise";



function App(){
 return(
  <>
    
{

  <BrowserRouter>
    <Routes>
   <Route path='pg' element={<Page/>}/>
   <Route path="pg/:id" element={<MainContent/>}/>
   <Route path="/" element={<Home/>}/>
   <Route path="about" element={<About/>}/>
    <Route path="/ourteam" element={<Ourteam />}/>
    <Route path="/franchise" element={<Franchise />}/>
    </Routes>
    </BrowserRouter>
}
  </>
 )
}

export default App;