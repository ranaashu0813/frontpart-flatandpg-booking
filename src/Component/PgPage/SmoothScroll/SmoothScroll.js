import { Link } from "react-scroll";
import SimpleMap from "../../UI/Maps/GoogleMaps";
import FoodMenu from "../FoodMenu/FoodMenu";
import "./SmoothScroll.css";

function SmoothScroll(props) {
  
  return (
    <>
      <div className="container1">
        <Link
          to="Occupancy"
          
          smooth={false}
          offset={-65}
          duration={1}
          style={{ margin: "10px",cursor:"pointer"}}
          
        >
          Occupancy
        </Link>
        <Link
          to="Amenities"
          
          smooth={false}
          offset={-70}
          duration={1}
          style={{ margin: "10px",cursor:"pointer" }}
        >
          Amenities
        </Link>
        <Link
          to="Details"
          
          smooth={false}
          offset={-70}
          duration={1}
          style={{ margin: "10px" ,cursor:"pointer"}}
        >
          Details
        </Link>
        <Link
          to="Map"
         
          smooth={true}
          offset={-90}
          duration={1}
          style={{ margin: "10px" ,cursor:"pointer" }}
        >
          Locality
        </Link>
      </div>

      <main >
      <div style={{marginLeft:"3rem"}}>
        <div id="Occupancy" style={{ marginTop:"1rem" ,marginBottom:'2rem'}}>
          <h3>Occupancy</h3>
          <div>
          {props.occupancy?.split(';').map((obj,i)=>{
              return <li key={obj}>
            
                {props.occupancy?.split(';')[i]}             
              </li>
                
            })}
          </div>
        </div>
      <div id="Amenities" style={{marginBottom:"2rem"}} >
          <h3>Amenities</h3> 
          <div>
          {props.amenities?.split(',').map((obj,i)=>{
              return <li key={obj}>
            
                {props.amenities?.split(',')[i]}             
              </li>
                
            })}
          </div>
        </div>
        <div id="Details" >
          <h3>Details</h3>
          <div>{props.details}</div>
        </div>
      </div>
        <div style={{display:"flex",justifyContent:"center" ,backgroundColor:"#ECECEC "}}>
          <div style={{display:"flex",width:"100%"}}>
            <div className="Food" style={{flex:3}}>
              <FoodMenu
              food={props.food} />
            </div>
            
          </div>
        </div>
        
      </main>
    </>
  );
}

export default SmoothScroll;
