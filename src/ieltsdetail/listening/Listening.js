import React from 'react'
import "./Listening.css"

function Listening() {
  return (
    <div className='container'>
        <div className="image" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://media.istockphoto.com/id/1391693314/vector/happy-woman-enjoying-her-music.jpg?s=612x612&w=0&k=20&c=Llq8pmOhVKNBxEBaPAMSnTiF3l0PIt4P4lh9INUeiAk=" style={{height:"200px"}}  alt="" />
        </div>
        <h1><span className='span'>Listening</span> Has 4 Sections-:</h1>
        <div className="section" style={{marginLeft:"1.5rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> SECTION 1: Conversation between two speakers.</p>
            <p><i class="fa-solid fa-arrow-right"></i> SECTION 2: Speech by one speaker.</p>
            <p><i class="fa-solid fa-arrow-right"></i> SECTION 3: Conversation between 4 speakers.</p>
            <p><i class="fa-solid fa-arrow-right"></i> SECTION 4: Speech by one speaker (Summary).</p>
            <p><span style={{color:"red"}}>Section</span> 1-3: These sections are generally a conversation between two speakers. In sec 1 its mostly about the conversation regarding address and details. So, in this section student must pay attention on the details like name, address, phone no and more details. In sec 3 pick up the keywords to get the answer.</p>
            <p><span style={{color:"red"}}>Section</span> 2-4: In these sections there is only one speaker so, student have to focus on the information he/she is providing.</p>
        </div>

        <h1><span className='span'>STRATEGIES</span> TO SOLVE</h1>
        <div className="sect" style={{marginLeft:"1.5rem"}}>
            <p><i class="fa-solid fa-1" style={{marginRight:"0.5rem"}}></i> Reading questions in advance is important, when they ask you to read the next section.</p>
            <p><i class="fa-solid fa-2" style={{marginRight:"0.5rem"}}></i> Watch out for plural answers. If the question requires a plural answer. A singular answer is incorrect.</p>
            <p><i class="fa-solid fa-3" style={{marginRight:"0.5rem"}}></i> After the completion of one question quickly move to the next question to maintain the focus.</p>
            <p><i class="fa-solid fa-4" style={{marginRight:"0.5rem"}}></i> Understand synonyms used in the recording and relate with question to get the correct answers.(mandatory for fill ups)</p>
            <p><i class="fa-solid fa-5" style={{marginRight:"0.5rem"}}></i> If you are unable to find answer in the question paper then it must be in the recording. So, listen it properly.</p>
            <p><i class="fa-solid fa-6" style={{marginRight:"0.5rem"}}></i> Pay attention to the connectors such as but, still, although, however etc. answer must be revolving around that only.</p>
            <p><i class="fa-solid fa-7" style={{marginRight:"0.5rem"}}></i> It is advisable to start your pencil from the direction where speaker starts the description of the picture.(Mandatory for map question)</p>
            <p><i class="fa-solid fa-8" style={{marginRight:"0.5rem"}}></i> Note down the word limit/number or letter (a, b, c) option then pen down the answers.</p>
            <p><i class="fa-solid fa-9" style={{marginRight:"0.5rem"}}></i> In choose the correct letter from question always underline the keyword demanding the question.</p>
            <p><i class="fa-solid fa-1"></i><i class="fa-solid fa-0" style={{marginRight:"0.5rem"}}></i> Pay Attention on the yes/no or True/False. Don’t write yes/no on the behalf of T/F.</p>

        </div>

    </div>

  )
}

export default Listening