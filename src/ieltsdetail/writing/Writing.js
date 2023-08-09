import React from 'react'
import "./Writing.css"

function Writing() {
  return (
    <div className='container'>
        <div className="image" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://cdn.ieltswritingcorrectionservice.com/wp-content/uploads/2021/07/man-checking-his-ielts-writing-task.jpg" style={{height:"200px"}}  alt="" />
        </div>
        <h1><span className='span'>Writing</span> Has 2 Sections-:</h1>
        <div className="section" style={{marginLeft:"1.5rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> Task 1: It consist of Pie charts, line graph, bar graph, process.</p>
            <p><i class="fa-solid fa-arrow-right"></i> Task 2: It is an Essay writing</p>
        </div>

        <h4 className='span' style={{marginTop:"4rem"}}>Task 1:</h4>
        <p style={{marginLeft:"1.5rem",marginTop:"1rem"}}>Structure to write task 1 with tips</p>
        <div className="para" style={{marginLeft:"3rem"}}>
          <p><i class="fa-solid fa-arrow-right"></i> Firstly, student have to write the overview of the pie chart, graph or process. Which is known as Intro part (depiction, illustration).</p>
          <p><i class="fa-solid fa-arrow-right"></i> Then comes BP1 (Body Paragraph 1). start writing the depicted information about the given picture.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Further comes BP2 (Body Paragraph 2). Now start comparing the information with the previous information.</p>
          <img src="https://essayforum.com/shared_files/uploaded/93670/350719_1_o.png" alt="" />
          <p><i class="fa-solid fa-arrow-right"></i> Now we can see information is in four parts. Now a student can divide information in 2 parts and can explain it in both paragraphs respectively.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Student should use connectors in this. Such as although, firstly, moving towards etc.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Conclude it in the end by writing the overall of the info.</p>
          <p><i class="fa-solid fa-arrow-right"></i> Always have look on word limit. Which is 150 words.</p>
        </div>

        <h4 className='span' style={{marginTop:"4rem"}}>Task 2:</h4>
        <h4 style={{marginLeft:"1.5rem",marginTop:"1rem"}}>Structure is same: Intro, BP1, BP2 and Conclusion.</h4>
        <h5 style={{marginLeft:"1.5rem",marginTop:"1rem"}}>EXAMPLE: Some people think that social networking sites have a huge negative impact on both individuals and society. To what extent do you agree or disagree?</h5>

        <div className="para" style={{marginLeft:"3rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> INTRO: Now student have to give information regarding negative impact of social networking sites or can rephrase the question and by adding I agree or disagree with statement and will provide some extensive details in my upcoming paragraphs.</p>
            <p><i class="fa-solid fa-arrow-right"></i> BP1: Now student can write the reason for negative impact with one example.</p>
            <p><i class="fa-solid fa-arrow-right"></i> BP2: It is also same as above another reason with one example. In the case of partial agree view, student can write 30 per of agree view content in BP1 and 70 per of disagree view in the BP2.</p>
            <p><i class="fa-solid fa-arrow-right"></i> CONCLUSION: In conclusion student can write crux of the topic.</p>
        </div>



        <h4 style={{marginLeft:"1.5rem",marginTop:"3rem"}}>HOW TO GENERATE THE IDEAS FOR ESSAY</h4>
        <h5 style={{marginLeft:"1.5rem",marginTop:"1rem"}}>(Read carefully the statement and understand the demand of the question).</h5>

        <div className="para" style={{marginLeft:"3rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> BRAINSTROMING: Rack your brain for ideas. Be aware of the world around you. Explore daily, read newspaper or articles.</p>
            <p><i class="fa-solid fa-arrow-right"></i> PARAMETERS: Judge the topic on the parameters politically, legally, technically, socially and ethically.</p>
            <p><i class="fa-solid fa-arrow-right"></i> BEST IDEAS: Write down all the good points on the side and pick the best for writing.</p>
            <p><i class="fa-solid fa-arrow-right"></i> LEXICAL RESOURCES: Write down the vocab beforehand then use it.</p>
            <p><i class="fa-solid fa-arrow-right"></i> 5W1H: This is the most effective way to expand your ideas. It stands for What, When, Where, Why, Who and How. Ask yourself these questions related to the topic. Write them down on your sheet for reference.</p>
            <p><i class="fa-solid fa-arrow-right"></i> Our,us,we: These words are not usable in writing.</p>
        </div>

        <h4 style={{marginLeft:"1.5rem",marginTop:"3rem"}}>HOW TO MARK WRITING</h4>
        <h5 style={{marginLeft:"1.5rem",marginTop:"1rem"}}>It is marked through 4 parameters</h5>

        <div className="para" style={{marginLeft:"3rem"}}>
            <p><i class="fa-solid fa-arrow-right"></i> TR: It is basically task response. How relevant essay is to the question.</p>
            <p><i class="fa-solid fa-arrow-right"></i> GR: It is grammatically range and accuracy. Is students essay grammatically correct.</p>
            <p><i class="fa-solid fa-arrow-right"></i> CC: it is coherence and cohesion. How logical and structured your essay is.</p>
            <p><i class="fa-solid fa-arrow-right"></i> LR: It is known as lexical resources. How much vocabulary student have used.</p>
            <p style={{color:"red"}}>Now give bands from each parameter out 6 and divide with the 4.</p>

        </div>
        

    </div>
  )
}

export default Writing