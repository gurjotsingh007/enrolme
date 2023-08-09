import {React,useState} from 'react'
const reactStringReplace = require('react-string-replace');


function SummaryChooseCorrect(props) {
  var options = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]
    const [a,Seta] = useState("");
    const [b,Setb] = useState("");
    const [c,Setc] = useState("");
    const [d,Setd] = useState("");
    const [e,Sete] = useState("");
    const [f,Setf] = useState("");
    const [g,Setg] = useState("");
    const [h,Seth] = useState("");
    const [I,SetI] = useState("");
    const [j,Setj] = useState("");
    const [k,Setk] = useState("");

    const states = [a,b,c,d,e,f,g,h,I,j,k];
    const setstates = [Seta, Setb, Setc, Setd, Sete, Setf, Setg, Seth, SetI, Setj, Setk]

  options = options.slice(0,props.option)
  const [mcq, Setmcq] = useState("")
  let markdown = props.questionText
  var i = props.sr

  for(;i<=props.srEnd;i++){
    markdown = reactStringReplace(markdown, i, (match, i) => (
      <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{match}</span> 
    ));
  }

  for(var i=props.sr;i<=props.srEnd;i++){
    var temp=0;
    markdown = reactStringReplace(markdown, `$$`, (match ,i) => (
            
        <div className="spacer" style={{display:"inline"}}> 
        <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={states[temp]} onChange={e => {setstates[temp++](e.target.value)}}>
            {options.map((opt)=>{return <option value={`${opt.toLowerCase()}`} >{opt}</option>})}
        </select> 
        </div>
      ))
  }


  return (
    <div>
        {/* <p>{props.questionText} <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> <input  style={{margin:"0.2rem"}} type="text" /> </p> */}
      <p>
      <span style={{display:"inline"}}>
            {markdown}
          {/* {reactStringReplace(markdown, `$$`, (match ,i) => (
            
            <div className="spacer" style={{display:"inline"}}> 
            <select className='userInput' id={props.sr} style={{marginLeft:"1rem"}}  value={mcq} onChange={e => Setmcq(e.target.value)}>
                {options.map((opt)=>{return <option value={`${opt.toLowerCase()}`} >{opt}</option>})}
            </select> 
            </div>
          ))} */}
        </span> 
      </p>
    </div>
  )
}

export default SummaryChooseCorrect