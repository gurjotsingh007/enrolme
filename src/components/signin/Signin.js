import {React,useState,useEffect} from 'react'
import Axios from "axios"
import { Navigate,useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinner,Setspinner] = useState(false);

    
    function handleSubmit(event){
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_STRAPI_API}/api/auth/local`, {
            identifier: email,
            password: password,
        },)
        .then(response => {
            // console.log(response.data.jwt);
            localStorage.setItem('token',response.data.jwt);
            navigate('/dashboard');
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
        })
        .catch(error => {
            // Handle error.
            toast.error("Your email/password is incorrect or please confirm your account",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            // console.log('An error occurred:', error.response);
        });
    }

    function forgot(event){
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_STRAPI_API}/api/auth/forgot-password`, {
            "data":{
                email:email
            }
        },)
        .then(response => {
            toast.success("Check your email for OTP to change Password", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            });
        })
        .catch(error => {
            // Handle error.
            toast.error("email code is invalid",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            console.log('An error occurred:', error.response);
        });
    }

  return (
    <div className='signup'>
        <ToastContainer />
        <section class="vh-100">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{"borderRadius": "25px"}}>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                        <form id = "signin-form" onSubmit={handleSubmit} class="mx-1 mx-md-4">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="form3Example3c" class="form-control" />
                                {/* <div>
                                    <label class="form-label" for="form3Example4c">Your Email</label>
                                    <button className='create-btn' style={{marginLeft:"11rem"}} >Forgot Password?</button>
                                </div> */}
                                <label class="form-label" for="form3Example4c">Your Email</label>
                                <button className='create-btn' style={{marginLeft:"8rem"}} onClick={forgot} >Forgot Password?</button>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="form3Example4c" class="form-control" />
                                <label class="form-label" for="form3Example4c">Password</label>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" class="btn btn-primary btn-lg">Sign in</button>
                            </div>

                        </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Signin