import React , {useState} from 'react'
import './Navbar.css'

const Navbar = ({onPg}) => {
   
  const [show ,updateShow] = useState(false);
  const[know , updateknow] = useState(false);
  const [searchPg,setSearchpg]=useState("");
  const handleSearch=()=>{
      onPg(searchPg);
      console.log(searchPg)
  }
  return (
    <>
  
    <div className="max-width navbars">
    <div className="navbar-centerr hidden_container">
  
        {/* <div className="navbar-center-search-containerr " style={{marginLeft:"3rem"}}> 
            <div className="property-types ">
               
                
                <div className="location-search-bars hidden_container">
                <div className="containers">
              
                <span className="sup">Enter college/office/city/Locality</span>
                <div className="search-icon icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" value={searchPg} onChange={(e)=>setSearchpg(e.target.value)}/>
    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
           
            </div>
             

        </div> */}
    </div>
    <div className="navbar-rightside">

             <div className="calls ">
                <div className=" whatsapp-logo">
                <i className="fa-brands fa-whatsapp "></i>
                </div>
                <span className="requests on_right" > Request A Callback</span>
             </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar
