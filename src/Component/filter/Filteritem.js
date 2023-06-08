import React, {useState,useRef,useEffect} from 'react'
import FilterModal from './FilterModal';
import Slider from '@mui/material/Slider';

import './Filters.css'
import {useFilter} from '../../Store';



const Filteritem = () => {

//here we are using context
 const {filter:{sort_btn,gender,price_range}, dis_filter} = useFilter();
//slider 

//for state


const handleChange=(event, newValue)=>{
  dis_filter({
    type:"change_range",
    payload:newValue
  })


};

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
//they all are use state 
  const ref = useRef()
  const[bud , updatebud] = useState(false); 
  const [gen, updategen] = useState(false);
  const[sort, updatesort] = useState(false);
  useEffect(() => {
   const clickOutside =(e)=>{
    if((bud && ref.current && !ref.current.contains(e.target) )
    || (gen && ref.current && !ref.current.contains(e.target) )
    || (sort && ref.current && !ref.current.contains(e.target)) ){
      updatebud(false);
   
      updategen(false);
    
      updatesort(false)
    }
   };
   document.addEventListener('click',clickOutside);
    return () => {
        document.removeEventListener('click',clickOutside);
    };
  }, [bud,sort, gen]);
 



const budjet =()=>{
  updatebud(!bud);
 
    if(gen) updategen(!gen); 
  
    if (sort) updatesort(!sort);
}
  const gend =()=>{
    updategen(!gen);
    if(bud) updatebud(!bud);  
    if (sort) updatesort(!sort)
  }
  
  const sortby=()=>{
    updatesort(!sort);
    if(bud) updatebud(!bud);
   
    if(gen) updategen(!gen); 
 

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
    dis_filter({
      type:"clear"
     })

    if (set2) unset2(!set2); 

    if(set) unset(!set); 
    if(set3) unset3(!set3); 
    if(h) hh(!h)
    if(l) ll(!l);
  }
  return (
    <>
      
      <div className="filters hidden_filter" ref={ref} style={{marginTop:"2rem"}}>

      <div className="filter_write">
        <h4>Filters</h4>
      </div>

        <div className="filter_button_1 filter_items" onClick={budjet}>
              <div className="budget filter_item" >Budget</div>
          
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
        {
            bud && 
            <div className="wrapper">
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
      <div className="min_max" style={{display:"flex" , justifyContent:"space-between"}}>
        <h3>min</h3>
        <h3>max</h3>
      </div>
    </div>
        }
        
        <div className="filter_button_3 filter_items" onClick={gend}>
              <div className="Gender filter_item">Gender</div>
              
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
              </div>
              {
                  gen && 
                  
                  <div className="gen_container">
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
</div>
              }
          
      
        <div className="filter_button_5 filter_items"onClick={sortby}>
              <div className="sortBy filter_item" >Sort By :<span className='change' >  Price</span></div>
          
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
        {
            sort && 
            
             
  <div className="sort_container">
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
</div>
        }
<div className="button_clear">
<button type="button" onClick={handleclear} class="btn btn-outline-danger" >clear filters</button>
</div>
      </div>
     <div className='FilterMO'>
      <FilterModal  />

     </div>

      
    
    </>
  )
}

export default Filteritem