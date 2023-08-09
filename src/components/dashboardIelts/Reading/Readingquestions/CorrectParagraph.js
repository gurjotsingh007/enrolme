import React from 'react'

function CorrectParagraph(props) {
  return (
    <div>
        <p> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> {props.questionText} <input style={{margin:"0.5rem"}} type="text" /></p>
    </div>
  )
}

export default CorrectParagraph