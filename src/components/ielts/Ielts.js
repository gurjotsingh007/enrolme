import React from 'react'
import "./Ielts.css"
import Ieltsbanner from './Ieltsbanner'
import Ieltscard from './Ieltscard'

function Ielts() {
  return (
    <div>
        <Ieltsbanner />

        <div className="container div" style={{justifyConent:"center",color:"#543265",fontWeight:"bold"}}>
            <h1>IELTS MODULES</h1>
        </div>
        
        <div className="container">
          <div className="row g-1" style={{marginBottom:"2rem"}}>
              <Ieltscard title="Reading" url="/reading" img="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" />
              <Ieltscard title="Listening" url="/listening" img="https://cdn-icons-png.flaticon.com/128/1945/1945984.png" />
              <Ieltscard title="Speaking" url="/speaking" img="https://cdn-icons-png.flaticon.com/512/4849/4849692.png" />
              <Ieltscard title="Writing" url="/writing" img="https://cdn-icons-png.flaticon.com/512/1973/1973807.png" />
          </div>
        </div>


        
        
    </div>
  )
}

export default Ielts