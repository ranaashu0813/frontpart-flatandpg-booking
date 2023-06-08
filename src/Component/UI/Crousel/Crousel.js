import Carousel from 'react-bootstrap/Carousel';
import "./Crousel.css";

function Crousel(props) {

  
  return (
    
    
    <Carousel>
    {
      props.img?.map((e,i)=>{
        return (
          
          <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={e}
          alt="First slide"
        />
        
      </Carousel.Item>
          
        )
      })
    }
      
     
    </Carousel>
    
    
  );
}

export default Crousel;