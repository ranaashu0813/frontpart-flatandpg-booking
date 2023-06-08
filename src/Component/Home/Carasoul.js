import React from 'react'

const Carasoul = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height: "31rem"}}>
    <div className="carousel-item active">
    <img src="/Crousel_img1.jpg" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}>Discover a new way of living.</h5>
        <p style={{ fontSize: " x-large" }}>Life in an impeccable living awaits you.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Crousel_img2.jpg" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}></h5>
        <p style={{ fontSize: " x-large" }}></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Crousel_img3.jpg" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}></h5>
        <p style={{ fontSize: " x-large" }}></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='info' style={{ width: "100vw", maxWidth:"100%"}}>
   

</div>
    <div className="text-wrap" style={{height:"maxContent", width:"100%" , backgroundColor: "azure" ,padding: "44px" , textAlign:"center",height:"40vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
        <h2 style={{fontWeight:"bold",marginTop:"5rem"}}>Empowering Youth</h2>
        <p></p>

    </div>

    </div>
    </>
  )
}

export default Carasoul
