import {React,useState,useEffect} from 'react'
import Axios from "axios"
import QuestionsListening from './Listeningquestions/QuestionsListening';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./Listening1.css"
import ReactCountdownClock from "react-countdown-clock"
import "../../spinner/spinner.css"



function Listening1() {

    const [answers,Setanswers] = useState([]);
    const [showAnswers,SetshowAnswers] = useState(false);

    //useState for when submit button is clicked then col-8 will be removed
    const [col8,Setcol8] = useState(false);

    function onSubmit(event){
        event.preventDefault();
        console.log("ccc")
        let inputArr = [];
        let answerArr = [];
        let incorrect = [];
        //for getting all the answers that user puts in the input tag
        for(var i=0;i<40;i++){
            inputArr.push(document.getElementsByClassName('userInput')[i].value)
        }
        
        //for getting all the answers putted in content type with questions
        for(var i=0;i<answers.length;i++){
            answerArr.push(answers[i].attributes.answer)
            console.log(answers[i].attributes.answer)
        }

        console.log(inputArr)
        console.log(answerArr)
        var count = 0;
        for(var i=0;i<inputArr.length;i++){
            if(inputArr[i].toLowerCase() == answerArr[i].toLowerCase()){
                count++
            }
            else{
                incorrect.push(i+1)
            }
        }
        alert("YOUR SCORE IS:"+count+"/40 "+ "\n" +"INCORRECT ANSWERS: "+incorrect)
    }

    function showAnswersOnClick(){
        Setcol8(!col8);
        SetshowAnswers(!showAnswers);
    }


    // for sorting according to serial number we getting in api call
    answers.length>0 && answers.sort(function(x, y) {
        if (x.attributes.sr < y.attributes.sr) {
          return -1;
        }
        return 1;
    });



    // to store url of audio file
    const [listen,Setlisten] = useState("");
    var link = document.location.href.split('/')[4];

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

    useEffect(()=>{
        
        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/listenings/${link}/?populate=*`)
        .then(response => {
            Setlisten(response.data.data.attributes.audio.data[0].attributes.url);
            // console.log(response.data.data.attributes.audio.data[0].attributes.url);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        })

        //to get answers of all questions 
        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/listenings/${link}/?populate=listening_questions.diagramImage.media`).then((response)=>{
            Setanswers(response.data.data.attributes.listening_questions.data);
            // console.log(response.data.data.attributes.listening_questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])


  return (
    <div>
        {listen.length===0?<span class="loader"></span>:<div>
        <div className="row" style={{position:"sticky"}}>
            {/* audio and questions */}
            <div className={`${col8==false?"col-8":"col"}`} style={{padding:"2rem",overflowY:"scroll",height: "98vh"}}>
                <AudioPlayer
                    className='audio'
                    style={{backgroundColor:"#d6f0f4",border:"1px solid #32b3c7",width:"90%"}}
                    src={`${listen}`}
                />
                
                {/* questionsListening */}
                <div><QuestionsListening /></div>
                
               
            </div>

            {/* questionpallete */}
            <div className="col container " style={{width:"5rem",backgroundColor:"#284664",position:"sticky", marginTop:"0", top:"1px"}}>
                <img style={{display:"flex",justifyContent:"center"}} src="https://ads.intergreat.com/www/images/30c9e2d53a04486eb2be804aba0fc3d9.png" />
                <p style={{color:"white",marginTop:"0.5rem",fontSize:"22px",fontWeight:"600",display:"flex",justifyContent:"center"}}>QUESTION PALETTE</p>

                {/* for displaying numbers of checking */}
                <div className="container">
                    {number.map((num)=>{
                        return <span className='number' style={{margin:"0.4rem",fontWeight:"700",backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"28px",width:"30px"}}>{num}</span> 
                    })}
                </div>

                {/* for submit button */}
                <div className="container">
                    
                    <div style={{float:"left"}}>
                        <button type="button" onClick={onSubmit} class="btn" style={{backgroundColor:"#f3f3f3"}}><i class="fa-solid fa-paper-plane"></i> Submit</button>
                        <button type="button" onClick={()=>{showAnswersOnClick()}} class="btn" style={{backgroundColor:"#f3f3f3",marginLeft:"1rem"}}>{showAnswers?<><i class="fa-solid fa-cubes-stacked"></i>HIDE ANSWERS</>:<><i class="fa-solid fa-cubes-stacked"></i>SHOW ANSWERS</>}</button>
                    </div>

                    <div className='convertToInline' style={{float:"right"}}>
                        <ReactCountdownClock 
                        seconds={2400}
                        color="#f3f3f3"
                        alpha={0.9}
                        size={80}
                        />
                    </div>

                </div>
            </div>

            {/* logic to show answers when button is clicked */}
            {showAnswers?
            <div className="col" style={{overflowY:"scroll",height: "98vh"}}>
                <h1>Answers</h1>
                {answers.map((ans)=>{
                    return <p> <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{ans.attributes.sr}</span> {ans.attributes.answer} </p>
                })}
            </div>
            :null}
        </div>

        
        </div>}
    </div>
  )
}

export default Listening1