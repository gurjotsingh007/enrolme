import React from 'react'
const reactStringReplace = require('react-string-replace');


function Summary(props) {
  let markdown = props.questionText
  var i = props.sr
  for(;i<=props.srEnd;i++){
    markdown = reactStringReplace(markdown, i, (match, i) => (
      <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{match}</span> 
    ));
  }

  
  return (
    <div>
        <p>
        {/* {props.questionText}  */}
        <span style={{display:"inline"}}>
          {reactStringReplace(markdown, `$$`, (match ,i) => (
            <div className="spacer" style={{display:"inline"}}> <input className='userInput' id={props.sr} style={{border:"none",borderBottom:"2px solid #aaa",outline:"none",margin:"0.3rem"}} /> </div>
          ))}
        </span>
        {/* <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span>  */}
        {/* <input  style={{margin:"0.2rem"}} type="text" />  */}
        </p>

    </div>
  )
}

export default Summary