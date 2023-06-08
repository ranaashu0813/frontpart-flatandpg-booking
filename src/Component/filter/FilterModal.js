import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import {useFilter} from '../../Store';
function MyVerticallyCenteredModal(props) {

  const {filter:{sort_btn,gender,price_range}, dis_filter} = useFilter();
  //slider 
  
  //for state
   
  //this is for slider
  
  const handleChange=(event, newValue)=>{
    dis_filter({
      type:"change_range",
      payload:newValue
    })
  
  
  };

  //for gender section 
  const handlegender=(e,option)=>{
 
    let check = e.target.checked;
   
  
    dis_filter({
        type:"gender",
        payload: {
                option,
                check
        },
          });
        }
        const[set,unset] = useState(false); 
        const[set2,unset2] = useState(false); 
        const[set3,unset3] = useState(false); 
        const[l,ll] =useState(false);
        const[h,hh] =useState(false);
        const handleclick =()=>{
          unset(!set); 
        }
        const handleclick2 =()=>{
          unset2(!set2); 
        }
        const handleclick3 =()=>{
          unset3(!set3);
        }
        const lth=()=>{
          if(h) hh(!h)
          ll(!l);
        }
        const htl=()=>{
          if(l) ll(!l);
          hh(!h);
        }
        const handleclear =()=>{
          props.onHide()
          dis_filter({
            type:"clear"
          })
          
          if (set2) unset2(!set2); 
          
          if(set) unset(!set); 
          if(set3) unset3(!set3); 
          if(h) hh(!h);
          if(l) ll(!l);
     
        }
  return (
    <Modal
    fullscreen="true sm-down"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <h3 style={{color:"black",marginBottom:"-1rem" ,marginLeft:"3rem"}}>Price Range</h3>
      <div class="price-input" style={{width:"60vw",marginLeft:"2rem" }} >
     
<Slider
        aria-labelledby= 'range-slider'
        value={price_range}
        onChange={handleChange}
        valueLabelDisplay="auto"
       min={2000}
       max={20000}
       step={100}
       defaultValue={3000}
       
      />
    </div>
      <div className="min_max" style={{display:'flex' ,justifyContent:"space-between",marginTop:"-2rem" ,width:"60vw"}}>
        <h3>min</h3>
        <h3>max</h3>
      </div>
   


            {/*gender colomn  */}

<h3 style={{color:"black" ,marginLeft:"3rem"}}> Select Gender</h3>

  <div className="gender_main_container">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="male" id="male" onChange={(e)=>handlegender(e,'boys')} onClick={handleclick} checked={set}/>
  <label class="form-check-label" for="male">
  Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="female" id="female" onChange={(e)=>handlegender(e,'girls')} onClick={handleclick2} checked={set2}/>
  <label class="form-check-label" for="female">
  Female
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="unisex" id="unisex" onChange={(e)=>handlegender(e,'unisex')} onClick={handleclick3} checked={set3}/>
  <label class="form-check-label" for="unisex">
  Unisex
  </label>
</div>
</div>


{/* //sortby */}

<h3  style={{color:"black" ,marginLeft:"3rem",marginTop:"1rem"}}> Sort With Price</h3>
<div class="form-check">
<input class="form-check-input" type="radio" name="Radio" id="RadioDefault1" value="low" onClick={lth} checked={l}
onChange={(e)=>{
  dis_filter({
    type:"sort_change",
    payload:e.target.value
  })
}}/>
<label class="form-check-label" for="RadioDefault1" >
Low To High
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="Radio" id="RadioDefault2" value="high" onClick={htl} checked={h}
onChange={(e)=>{
  dis_filter({
    type:"sort_change",
    payload:e.target.value
  })
}}/>
<label class="form-check-label" for="fRadioDefault2">
High to Low
</label>
</div>
      </Modal.Body>
      <Modal.Footer>

      <div className="button_clear" > 
        <button type="button" onClick={props.onHide} class="btn btn-outline-success" >save filters</button>
<button type="button" onClick={handleclear} class="btn btn-outline-danger" >clear filters</button>
</div>
      </Modal.Footer>
    </Modal>
  );
}

function FilterModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="light" style={{margin:"2.7rem",padding:"1rem"}} onClick={() => setModalShow(true)}>
        Filter
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default FilterModal;