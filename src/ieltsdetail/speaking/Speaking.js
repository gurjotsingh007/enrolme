import React from 'react'
import "./Speaking.css"

function Speaking() {
  return (
    <div className='container'>
        <div className="image" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://yourielts.net/images/2020/02/12/what-words-to-use_thumbnail.png" style={{height:"200px"}}  alt="" />
        </div>
        <h1><span className='span'>Speaking</span> Has 3 Sections-:</h1>
        <div className="section" style={{marginLeft:"1.5rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> GENERAL QUESTIONS</p>
            <p><i class="fa-solid fa-arrow-right"></i> CUE CARD</p>
            <p><i class="fa-solid fa-arrow-right"></i> FOLLOWING QUESTIONS</p>
        </div>

        <h4 style={{marginTop:"4rem"}}><span className='span'>GENERAL QUESTION:</span> It’s the questions like introduction, study, work and some questions related to hobbies, and social questions, friends, political.</h4>
        <p style={{marginLeft:"1.5rem",marginTop:"1rem"}}>TIPS FOR ANSWERING GENERAL QUESTIONS</p>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Student should not stammer while answering.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Intro should not be a chaos of family info. It should be Name, Qualifications, Hobbies and Future plans.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Student should be polite while conversation. Pace should be normal.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Confidence should be there.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Student should not start their answer with NO in general questions.</p>
            <p>EXAMPLE: Do you prefer to email or call your friends? Personally, I prefer to call my friends as I can speak to them at a stretch. I find it difficult to text or email.</p>
        </div>

        <h4 style={{marginTop:"4rem"}}><span className='span'>CUE CARDS:</span> It can be on various topic. One topic will be given to the student and there will be 1 mint to prepare the answer. After that student have to speak for 2 to 3 minutes on that topic.</h4>
        <p style={{marginLeft:"1.5rem",marginTop:"1rem"}}>HOW TO GENERATE THE CUE CARD ANSWER</p>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Firstly, read the question then ask yourself 5W1H about the topic. (what, when, where, why, who and how)</p>
          <p><i class="fa-solid fa-arrow-right"></i> Now use PPF. (Past, Present and Future). After getting points by using 5W1H now quote the points with past incidents then relate it to present and end with future.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Story Telling works when you student does not have any personal memory to lean back on. Think about the first things that come in your mind and weave a story around it. Use references, examples and contrasting opinions to expand your answers.</p>
        </div>

        <h4 style={{marginTop:"4rem"}}><span className='span'>FOLLOWING QUESTIONS:</span> These are the questions related to the cue card which student have answered previously. Questions will be regarding that topic only.</h4>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Student should give answer according to que card info, answer should not be contradicted.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Now use PPF. (Past, Present and Future). After getting points by using 5W1H now quote the points with past incidents then relate it to present and end with future.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Always end your speaking by saying Thankyou for listening so patiently.</p>
        </div>

    </div>
  )
}

export default Speaking