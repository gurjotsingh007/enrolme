import React from 'react'
import "./Reading.css"

function Reading() {
  return (
  
      <div className='container'>
        <div className="image" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://yourielts.net/images/Reading/how-to-prepare-for-ielts-reading-general.png" style={{height:"200px"}}  alt="" />
        </div>
        <h1>There are three sections of <span className='span'>reading</span> and it consist of 40 question-:</h1>
        <p><i class="fa-solid fa-arrow-right"></i> First and foremost, time management.</p>
        <p><i class="fa-solid fa-arrow-right"></i> Each question requires 1.5-2 mints not more than that.</p>

        <h1>There are various strategies to solve the different type of questions-:</h1>
        <h3><i class="fa-solid fa-1"></i> - Strategies for match the headings, diagrams, m c q, pick correct info and fill ups.</h3>

        <h4 style={{marginLeft:"1.5rem",marginTop:"1.5rem",marginBottom:"1.5rem"}}>A. Find the keyword in the question. (KEYWORD: It is always in the form of adjective or action.)</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Read the first two and last two lines of paragraph.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Don't think too much about the article, it will waste your time.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Cross the options in m c q which are just fillers.</p>
        </div>

        <h4 style={{marginLeft:"1.5rem",marginTop:"1.5rem",marginBottom:"1.5rem"}}>B. Do skimming for quick answers. (SKIMING: It’s getting the overview of the material)</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Read the topic and get the overview of the text.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Pay attention to the first few lines of every paragraph.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Always read the last paragraph thoroughly as this normally contains the summary.</p>
        </div>

        <h4 style={{marginLeft:"1.5rem",marginTop:"1.5rem",marginBottom:"1.5rem"}}>C. Next step is scanning.(SCANING: Underlining the important fact from the text)</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Always underline important specific information and numbers. Pick out names, date, figures and statistics etc.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Identify the keywords then scan the text for it and possible synonym for it.</p>
        </div>


        <h3 style={{marginTop:"2rem"}}><i class="fa-solid fa-2"></i> - Now moving towards True/False/Not Given and Yes/No/Not Given</h3>
        <h4 style={{marginLeft:"1.5rem",marginTop:"1.5rem",marginBottom:"1.5rem"}}>A. TRUE/FALSE/NOT GIVEN: It is based on the factual information. True is used when the statement of the question matches with the facts in the text whereas, False is used when there is no match between the question and facts in the text. Apart from that Not Given is used when fact is not written or totally opposite.</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> EXAMPLE: (This increase in cyber-crime has alarmed experts.)</p>
          <p style={{marginLeft:"1.5rem"}}> Q. Cyber crime is on the rise..</p>
          <p style={{marginLeft:"1.5rem"}}> A. True, because there is synonym used but the fact is same.</p>
        </div>

        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> EXAMPLE: (The first personal computer was invented in the 1970’s…..)</p>
          <p style={{marginLeft:"1.5rem"}}> Q. Personal Computers were first invented in 1990.</p>
          <p style={{marginLeft:"1.5rem"}}> A. False, because facts are not matching with the text.</p>
        </div>

        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> EXAMPLE: (…Although once eradicated from Toronto, bed bugs have made a comeback and now considered one of the leading pests in the city…)</p>
          <p style={{marginLeft:"1.5rem"}}> Q. Rats are the most common nuisance Torontonians face.</p>
          <p style={{marginLeft:"1.5rem"}}> A. Not given, because there are no facts written about Rats.</p>
        </div>

        <h4 style={{marginLeft:"1.5rem",marginTop:"2rem",marginBottom:"2rem"}}>B. YES/NO/NOT GIVEN: It is based on the opinions and claims of the Author of text. YES, is when author’s claim matches with text information. NO, is when author’s claim does not match with the text. NOT GIVEN, is when author’s claim is not mentioned in the text.</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Strategies for yes/no/not given and True/false/Not Given.</p>
          <p style={{marginLeft:"1.5rem"}}> A. Highlight the important words, link in the paragraphs and locate the answer.</p>
          <p style={{marginLeft:"1.5rem"}}> B. Answers are always paraphrased, meaning of that will be your answer.</p>
          <p style={{marginLeft:"1.5rem"}}> C. Read the statement twice.</p>
          <p style={{marginLeft:"1.5rem"}}> D. Search for synonyms.</p>

        </div>
        
      </div>
    
  )
}

export default Reading