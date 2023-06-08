import React from 'react'

import ReserveModal from './ReserveModal'
import Mainnavbar from '../../Header/Mainnavbar'

const Franchise = () => {
  return (
    <>
    <Mainnavbar/>
      <div className="box" style={{margin:"20px",padding:"30px",border:"2px solid black", borderRadius:"5px",boxShadow: "12px 12px 2px 1px rgba(8, 8, 11, 0.2)" }}>
        <h3>Do you want to start something fresh in the hospitality industry?</h3>
        <p>SIBILIZE Franchise is here to serve you with its franchise model, which will aid you in every
element of running a profitable business.</p>
<br/>
<h3>Why should you choose Sibilize's Franchise?</h3>
<ul>
    <li>Sibilize will add movable assets to the property to enhance the tenant experience if they do not
already exist.</li>
<li>SIBILIZE provides a fitting SOP (Standard Operating Procedure) and guidelines for the running
of the Franchise.</li>
<li>SIBILIZE will assist in attracting tenants to the franchise.</li>
<li>SIBILIZE will brand the property in order to give it the worth and trust of a brand.</li>
</ul>
<p>And a lot more!</p>
<br/>
<br/>

</div>
<div className='box1' style={{margin:"20px",padding:"30px"}}>
<h3>Fill out the form to understand more about our franchise and a business professional will contact you.</h3>
<ReserveModal/>
</div>
      
    </>
  )
}

export default Franchise
