import {React,useState,useEffect} from 'react'
import Axios from "axios"
const reactStringReplace = require('react-string-replace');

function Blanks(props) {
  let markdown = props.questionText
  // var sr = props.sr
  // markdown = reactStringReplace(markdown, sr, (match, sr) => (
  //   <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{match}</span> 
  // ));

  return (
    <>
        {/* <p>
         <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> {props.questionText} <input  style={{margin:"0.2rem"}} type="text" />
         </p> */}
         <p>
         <span style={{backgroundColor:"#327846",borderRadius:"50%",marginRight:"0.5rem",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
         <span style={{display:"inline"}}>
          {reactStringReplace(markdown, `$$`, (match ,i) => (
            <div className="spacer" style={{display:"inline"}}> <input className='userInput' id={props.sr} style={{border:"none",borderBottom:"2px solid #aaa",outline:"none",margin:"0.3rem"}} /> </div>
          ))}
        </span>
         </p>
    </>
  )
}

export default Blanks