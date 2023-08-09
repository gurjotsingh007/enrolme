import {React,useState} from 'react'
import DashboardNav from '../../dashboardNavbar/DashboardNav'
import { InlineWidget } from "react-calendly";

function Dashspeaking() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      {/* <div className="calendar" style={{margin:"2rem"}}>
        <Calendar onClickDay={(event)=>{console.log(event)}} onChange={onChange} value={value} />
      </div> */}

      <div className="calendly">
        <InlineWidget url="https://calendly.com/enrolmespeaking" />

      </div>
    </div>
  )
}

export default Dashspeaking