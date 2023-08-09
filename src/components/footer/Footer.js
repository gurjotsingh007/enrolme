import React from 'react'
import "./Footer.css"
import logo from "../images/enrollf.png"

function Footer() {
  return (
    <div className="footer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.41137471269607!2d-79.59965359299473!3d43.65686441889167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39aa44058f67%3A0xa3980656f62787ef!2sEnrol%20Me%20Education!5e0!3m2!1sen!2sin!4v1675685619695!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
        <footer class="text-center text-lg-start text-muted" >
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
  

      
            <div>
                {/* <a href="https://goo.gl/maps/ygM4oHgCTapMuzhN6" target="_blank" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                </a> */}
                <a href="https://www.instagram.com/enrolme.io/" target="_blank" class="me-4 text-reset">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/enrolme_ielts/?hl=en" target="_blank" class="me-4 text-reset">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
  
        </section>
      
       
        <section class="" >
            <div class="container text-center text-md-start mt-5">
           
            <div class="row mt-3">
          
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
                <h6 class="text-uppercase fw-bold mb-4">
                    {/* <i class="fas fa-gem me-3"></i>Enrolmes */}
                    <img src={logo} style={{height:"5rem",width:"5rem"}}></img>

                </h6>
                <p>
                We are a leading platform providing education abroad. We provide you the best opportunity to persue your higher studies when you join us.
                </p>
                </div>
               
                
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
                <h6 class="text-uppercase mb-4" style={{fontWeight:"bold"}}>
                    Services
                </h6>
                <p>
                    IELTS
                </p>
                <p>  
                    Course Change
                </p>
                <p>
                    2nd Year Admission
                </p>
                <p>
                    College Change
                </p>
                </div>
               
              

            
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> 5045 Orbitor Dr Unit 8-401, Mississauga, ON L4W 4Y4, Canada</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    <a href = "mailto: info@enrolme.in">info@enrolme.in</a>
                </p>
                <p><i class="fas fa-phone me-3"></i> +1 (647) 821-1244</p>
                </div>
              
            </div>
         
            </div>
        </section>
       

     
        <div class="text-center p-4 footerbottom" style={{backgroundColor: "white"}}>
            © 2023 Copyright: 
            <a class="text-reset fw-bold" style={{color:"#1e1d6b"}}> Enrolme</a>
        </div>
      
        </footer>
     
    </div>
  )
}

export default Footer