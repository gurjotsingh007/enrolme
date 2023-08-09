import {React,useState} from 'react'
const reactStringReplace = require('react-string-replace');

function TrueFalseNG(props) {
  let markdown = props.questionText
  var sr = props.sr
  const [mcq, Setmcq] = useState("")
  // markdown = reactStringReplace(markdown, sr, (match, sr) => (
  //   <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{match}</span> 
  // ));
  function rand(){
    for(var i=0;i<10;i++){
      <option value="ran">RRRR</option>
    }
  }
  return (
    <div>
        {/* <p> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> {props.questionText} <input style={{margin:"0.5rem"}} type="text" /></p> */}
        <p>
        {/* {reactStringReplace(markdown, sr, (match, sr) => (
          <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{match}</span> 
        ))}; */}
        <span style={{marginRight:"0.5rem",backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
        {props.questionText}
        <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
            <option value="true">TRUE</option>
            <option value="false">FALSE</option>
            <option value="not given">NOT GIVEN</option>
        </select>
        </p>
    </div>
  )
}

export default TrueFalseNG