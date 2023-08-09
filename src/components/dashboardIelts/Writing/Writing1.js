import {React,useEffect,useState} from 'react'
import Axios from 'axios'
import "./Writing1.css"
import ReactCountdownClock from "react-countdown-clock"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../spinner/spinner.css"


function Writing1() {

    var link = document.location.href.split('/')[4];
    const [writing,Setwriting] = useState("");
    const [wordcount,Setwordcount] = useState(0)
    const [showclock1,Setshowclock1] = useState(true);
    const [showclock2,Setshowclock2] = useState(true);


    useEffect(()=>{
        
        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/writings/${link}/?populate=*`)
        .then(response => {
            Setwriting(response.data.data.attributes);
            // console.log(response.data.data.attributes);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        })

    },[])

    function submitTask(){
        Axios.post(`${process.env.REACT_APP_STRAPI_API}/api/writing-answers`, {
                data: {
                studentEmail:document.getElementById("studentEmail").value,
                task1:document.getElementById("task1").value,
                task2:document.getElementById("task2").value,
                },
            })
            .then((response) => {
                toast.success('Your Answers are submitted for review 😃 ', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                console.log(response);
            }).catch(error=>{
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
                console.log('An error occurred44:', error.response)
            });
    }

  return (
    <div>
        {writing.length===0?<span class="loader"></span>:<div style={{position:"fixed",overflowY:"scroll",height:"-webkit-fill-available",overflowX:"hidden"}}>
        
            <div className='row'>
                <ToastContainer />
                <div className="col" style={{padding:"5rem"}}>
                    <h2 style={{fontSize: "32px",fontWeight:"bold",color: "#faaa5a"}}>Writing Task 1</h2>
                    <p class="parawriting">You should spend about <strong>20 minutes</strong> on this task.</p>
                    <p class="parawriting">{writing.questionText1}</p>
                    <p class="parawriting">You should write <strong>at least 150 words.</strong></p>
                    <img src={writing && `${writing.diagramImage.data[0].attributes.url}`} alt="" />
                    <ReactCountdownClock seconds={1200}
                            color="#faaa5a"
                            alpha={0.9}
                            size={120}
                            paused={showclock1}

                    />
                    
                </div>


                <div className="col" style={{backgroundColor:"#feeede",padding:"5rem"}}>
                    <h3 className='parawriting1' >Type your essay below and click Submit for evaluation</h3>
                    <p className='parawriting' style={{color:"red"}} >* Timer will start once you start typing in text area.</p>
                    <div className="textArea">
                        <textarea id='task1' onClick={()=>{Setshowclock1(false)}} onChange={(e)=>{Setwordcount(e.target.value.split(" ").filter((temp)=>{return temp!=""}).length)}} className='textAreaAnswer'></textarea>
                    </div>
                    <p className='parawriting'>Words: <span className='parawriting1'>{wordcount}</span></p>
                </div>
            </div>


            <hr />


            <div className='row'>
                <div className="col" style={{padding:"5rem"}}>
                    <h2 style={{fontSize: "32px",fontWeight:"bold",color: "#faaa5a"}}>Writing Task 2</h2>
                    <p class="parawriting">You should spend about <strong>40 minutes</strong> on this task.</p>
                    <p class="parawriting">{writing.questionText2}</p>
                    <p class="parawriting">You should write <strong>at least 254 words.</strong></p>
                    <ReactCountdownClock seconds={2400}
                            color="#faaa5a"
                            alpha={0.9}
                            size={120}
                            paused={showclock2}

                    />
                </div>


                <div className="col" style={{backgroundColor:"#feeede",padding:"5rem"}}>
                    <h3 className='parawriting1' >Type your essay below and click Submit for evaluation</h3>
                    <p className='parawriting' style={{color:"red"}} >Timer will start once you start typing in text area.</p>
                    <div className="textArea">
                        <textarea id='task2' onClick={()=>{Setshowclock2(false)}} onChange={(e)=>{Setwordcount(e.target.value.split(" ").filter((temp)=>{return temp!=""}).length)}} className='textAreaAnswer'></textarea>
                    </div>
                    <p className='parawriting'>Words: <span className='parawriting1'>{wordcount}</span></p>
                    <input id="studentEmail" style={{border:"none",borderBottom: "2px solid #aaa",marginRight:"1rem",backgroundColor:"#feeede"}} type="text" placeholder='Enter Your Email' />
                    <button onClick={submitTask} style={{color:"white",backgroundColor:"#284664"}} type="button" class="btn btn-secondary"> <span><i class="fa-solid fa-paper-plane"></i></span> Submit the Test</button>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Writing1
