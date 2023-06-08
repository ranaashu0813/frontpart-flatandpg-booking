import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PopOver() {
  return (
    <>
      
        <OverlayTrigger
          trigger="click"
          key={"bottom"}
          placement={"bottom"}
          overlay={
            <Popover id={`popover-positioned-${"bottom"}`}>
              
              <Popover.Body>
                <div>
                <strong>Contact:</strong>  9599649459
                </div>
                
                <div>
                <strong>Email:</strong>  info@sibilize.com 

                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="black" style={{fontSize:"1.3rem"}}>Contact Us</Button>
        </OverlayTrigger>
    
    </>
  );
}

export default PopOver;