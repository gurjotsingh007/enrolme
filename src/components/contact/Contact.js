import {React,useState} from 'react'
import Axios from "axios"
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [name,Setname] = useState("");
    const [number,Setnumber] = useState();
    const [email,Setemail] = useState("");
    const [message,Setmessage] = useState("");

    function handleSubmit(){
        Axios.post(`${process.env.REACT_APP_STRAPI_API}/api/feedbacks`, {
            "data": {
            name: name,
            number:number,
            email: email,
            message: message
            },
        })
        .then((response) => {
            toast.success('We have received your details. Will Contact you Shortly!! 🧞‍♂️ ', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // console.log(response);
        }).catch((err)=>{
            toast.error('🦄 Something Went Wrong', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // console.log(err)
        });
    }

  return (
    <div style={{position:"fixed",overflowY:"scroll",height:"98vh",overflowX:"hidden"}}>
        <ToastContainer />
        <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
                <div className="title" style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                    <h1>Contact Us</h1>
                </div>
                <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label"> Full Name </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e)=>Setname(e.target.value)}
                    placeholder="Full Name"
                    class="formbold-form-input"
                    />
                </div>
                <div class="formbold-mb-5">
                    <label for="phone" class="formbold-form-label"> Phone Number </label>
                    <input
                    type="number"
                    name="phone"
                    id="phone"
                    maxlength="10"
                    onChange={(e)=>Setnumber(e.target.value)}
                    placeholder="Enter your phone number"
                    class="formbold-form-input"
                    />
                </div>
                <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label"> Email Address </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e)=>Setemail(e.target.value)}
                    placeholder="Enter your email"
                    class="formbold-form-input"
                    />
                </div>
                
                <div class="formbold-mb-5">
                    <label for="message" class="formbold-form-label block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                    <textarea onChange={(e)=>Setmessage(e.target.value)} rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div>
                    <button onClick={handleSubmit} class="formbold-btn">Send Message <span><i class="fa-sharp fa-solid fa-paper-plane"></i></span></button>
                </div>
            </div>
        </div>


        {/* --------------------- -- FOOTER --------------------- */}


        <div className="footer">
            <footer class="text-center text-lg-start text-muted" >
            <section class="row d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                
                

                
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                        <h6 class="text-uppercase fw-bold mb-4" style={{fontSize:"1.3rem"}} >CANADA OFFICE</h6>
                        <class className="content" style={{fontSize:"1.1rem"}}>
                            <p><i class="fas fa-home me-3"></i> 5045 Orbitor Dr Unit 8-401, Mississauga, ON L4W 4Y4, Canada</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                <a href = "mailto: info@enrolme.in">info@enrolme.in</a>
                            </p>
                            <p><i class="fas fa-phone me-3"></i> +1 (647) 821-1244</p>
                        </class>
                        
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                        <h6 class="text-uppercase fw-bold mb-4" style={{fontSize:"1.3rem"}}>INDIA OFFICE</h6>
                        <div className="content" style={{fontSize:"1.1rem"}}>
                            <p><i class="fas fa-home me-3"></i> SCO:142-143, 5th Floor, JUPOR Group Building, D - Block, Ranjit Avenue, Amritsar, Punjab 143001</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                <a href = "mailto: info@enrolme.in">info@enrolme.in</a>
                            </p>
                            <p><i class="fas fa-phone me-3"></i> +91 77105 00044</p>
                        </div>
                        
                    </div>
                
            </section>
        
            </footer>
        
        </div>

    </div>
  )
}

export default Contact