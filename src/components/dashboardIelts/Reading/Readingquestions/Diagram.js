import React from 'react'

function Diagram(props) {
    // arr to store number of inputs required for diagram question
    // const diagramInput = [];
    // function inp(sr){
    //     for(var i=0;i<num;i++){
    //         diagramInput.push( <div> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{sr++}</span> <input type="text" style={{display:"block",margin:"0.6rem",display:"inline"}} /> </div>);
    //     }
    // }
  return (
    <div>
        { props.image &&  <img src={props.image} alt="" />}
        <p> <span style={{backgroundColor:"#327846",borderRadius:"50%",color:"#fff",textAlign:"center",height:"30px",width:"30px"}}>{props.sr}</span> <input className='userInput' id={props.sr} style={{border:"none",borderBottom:"2px solid #aaa",outline:"none",margin:"0.3rem"}} /> </p>
        {/* {diagramInput.map((ele)=>{return ele})} */}
    </div>
  )
}

export default Diagram