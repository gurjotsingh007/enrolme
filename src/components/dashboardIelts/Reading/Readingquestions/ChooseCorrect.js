import {React,useState} from 'react'


function ChooseCorrect(props) {
  var options = ["A","B","C","D","E","F","G","H","I","J","K","L"]
  options = options.slice(0,props.option)
  const [mcq, Setmcq] = useState("")
  return (
    <div>
        <p>
         <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
         {props.questionText} 
         <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
            {options.map((opt)=>{return <option value={`${opt.toLowerCase()}`} >{opt}</option>})}
        </select>
         {/* <input className='userInput' id={props.sr} style={{border:"none",borderBottom:"2px solid #aaa",outline:"none",margin:"0.3rem"}} />  */}
         </p>
    </div>
  )
}

export default ChooseCorrect