import {React,useState} from 'react'

function Diagram(props) {
    var options = ["A","B","C","D","E","F","G","H","I","J","K","L"]
    options = options.slice(0,props.option)
    const [mcq, Setmcq] = useState("")
  return (
    <div>
        { props.image &&  <img src={props.image} alt="" />}
        <p> <span style={{backgroundColor:"#32b3c7",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> 
        {props.questionText}
        <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
            {options.map((opt)=>{return <option value={`${opt.toLowerCase()}`} >{opt}</option>})}
        </select>
        </p>
        {/* <input  style={{margin:"0.2rem"}} type="text" /> */}
        {/* {diagramInput.map((ele)=>{return ele})} */}
    </div>
  )
}

export default Diagram