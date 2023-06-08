import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-section-padding sb_footer">
        <div className='footer-links'>
            <div className='footer-links-item1'>
                <h3>S I B I L I Z E</h3>
            </div>
            <div className='footer-links-item'>
                <a href='/about'>
                    <p>About Us</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <a href='/ourteam'>
                    <p>Team</p>
                </a>
            </div>
            
            <div className='footer-links-item'>
                <a href='/franchise'>
                    <p>Franchies</p>
                </a>
            </div>
            <div className='footer-links-item'>
                <div className="social-media">
                    <a  href='https://www.linkedin.com/company/sibilize/' target='alt'>
                    <div className="social-media-items click_me" > 
                    <i className="fa-brands fa-linkedin" ></i></div>

                    </a>
                    <a href='https://www.instagram.com/sibilize/' target='alt'>

                    <div className="social-media-items click_me"> <i className="fa-brands fa-instagram"></i></div>
                    </a>
                    
                </div>
            </div>
            
        </div>
        
    
        </div>
      
    </div>
  )
}

export default Footer
