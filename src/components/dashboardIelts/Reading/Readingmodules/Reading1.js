import {React,useState,useEffect} from 'react'
import Axios from "axios"
import { Document, Page } from 'react-pdf';
import "./Reading1.css"
import ReactMarkdown from "react-markdown"
import Questions from '../Readingquestions/Questions';
import "../../../spinner/spinner.css"


function Reading1() {

    const [read,Setread] = useState("");
    const [answers,Setanswers] = useState([]);
    const [showAnswers,SetshowAnswers] = useState(false);

    function onSubmit(event){
        event.preventDefault();
        
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
        }
        // answerArr = [["conditions", "craftsmen and artists", "secure livelihood", "grand gallery", "481 feet", "queens chamber", "air channels", "false", "not given", "true", "true", "false", "d", "d", "b", "a", "a", "c", "c", "f", "d", "a", "c", "e", "g", "b", "vii", "v", "ix", "i", "iv", "111", "re offending", "sentencing", "victim", "restorative justice", "a", "c", "d", "b"]]
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

    useEffect(()=>{
        var link = document.location.href.split('/')[4];
        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/readings/${link}`)
        .then(response => {
            Setread(response.data.data.attributes.text);
            // console.log(response.data.data.attributes.text);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
        
        //to get answers of all questions 
        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/readings/${link}?populate[questions][populate]=*`).then((response)=>{
            Setanswers(response.data.data.attributes.questions.data);
            // console.log(response.data.data.attributes.questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    // for sorting according to serial number we getting in api call
    answers.length>0 && answers.sort(function(x, y) {
        if (x.attributes.sr < y.attributes.sr) {
          return -1;
        }
        return 1;
    });


  return (  
    <div> 
        {answers.length===0?<span class="loader"></span>:<div>
            <div className="row" style={{position:"fixed"}}>
                <div className="col" style={{textAlign:"justify",backgroundColor:"#d7e6dc",margin:"0.2rem",overflowY:"scroll",height: "98vh"}}>
                    <ReactMarkdown>
                        {read}
                    </ReactMarkdown>
                </div>
                <div className="col" style={{overflowY:"scroll",height: "98vh"}}>
                
                    {<Questions />}
                    <button type="button" onClick={onSubmit} class="btn" style={{backgroundColor:"#327846",color:"white"}}>SUBMIT</button>
                    <button type="button" onClick={()=>{SetshowAnswers(!showAnswers)}} class="btn" style={{backgroundColor:"#327846",color:"white",marginLeft:"1rem"}}>{showAnswers?<>HIDE ANSWERS</>:<>SHOW ANSWERS</>}</button>
                    
                </div>
             
                {/* logic to show answers when button is clicked */}
                {showAnswers?
                <div className="col" style={{overflowY:"scroll",height: "98vh"}}>
                    <h1>Answers</h1>
                    {answers.map((ans)=>{
                        return <p> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{ans.attributes.sr}</span> {ans.attributes.answer} </p>
                    })}
                    
                </div>
                :null}        
            </div>
        </div>}
    </div> 
            
    
  )
}

export default Reading1