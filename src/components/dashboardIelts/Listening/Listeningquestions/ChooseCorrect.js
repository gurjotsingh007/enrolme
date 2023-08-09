import {React,useState} from 'react'
import Select, { components } from 'react-select'
import ReactMarkdown from "react-markdown"
// var createReactClass = require('create-react-class');


function ChooseCorrect(props) {
  var options = ["A","B","C","D","E","F","G","H","I","J","K","L"]
  options = options.slice(0,props.option)
  const [mcq, Setmcq] = useState("")

  let markdown = props.questionText

  return (
    <div>
        <p> 
          <ReactMarkdown children={markdown} />
          <label> Choose Your Response :    
          <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
            <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
              {options.map((opt)=>{return <option value={`${opt.toLowerCase()}`} >{opt}</option>})}
            </select>
          </label>
        </p> 
        
    </div>
  )
}

export default ChooseCorrect