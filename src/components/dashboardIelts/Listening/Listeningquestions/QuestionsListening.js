import {React,useState,useEffect} from 'react'
// import Blanks from './Blanks'
// import TrueFalseNG from './TrueFalseNG'
import ChooseCorrect from './ChooseCorrect'
// import ChooseCorrectMultiple from './ChooseCorrectMultiple'
// import CorrectParagraph from './CorrectParagraph'
// import Summary from './Summary'
import Axios from "axios"
import Table from './Table'
import Summary from './Summary'
import Diagram from './Diagram'
import "../../../spinner/spinner.css"
import Blanks from './Blanks'


function QuestionsListening() {
                                                                                                                                                   
    const [obj,Setobj] = useState([])

    useEffect(()=>{
        var link = document.location.href.split('/')[4];
        // Axios.get(`http://localhost:1337/api/listenings/${link}?populate=*`).then((response)=>{
        //     Setobj(response.data.data.attributes.listening_questions.data);
        //     // console.log(response.data.data.attributes.questions.data);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        Axios.get(`${process.env.REACT_APP_STRAPI_API}/api/listenings/${link}?populate=listening_questions.diagramImage.media`).then((response)=>{
            Setobj(response.data.data.attributes.listening_questions.data);
            // console.log(response.data.data.attributes.questions.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    // for sorting according to serial number we getting in api call
    obj.length>0 && obj.sort(function(x, y) {
        if (x.attributes.sr < y.attributes.sr) {
          return -1;
        }
        return 1;
    });

    

    function blan(param){ 
        if(param.attributes.questionType==="Table" && param.attributes.heading!=null){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="Table2" && param.attributes.heading!=null){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="Table3" && param.attributes.heading!=null){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Table id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="blanks"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Blanks id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="diagram"){
            // {console.log(param.attributes.diagramImage.data)}
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram option={param.attributes.options} id={param.attributes.sr} sr={param.attributes.sr} questionText={param.attributes.questionText!=null && param.attributes.questionText} image={param.attributes.diagramImage.data!=null && `${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="diagram2"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram option={param.attributes.options} id={param.attributes.sr} sr={param.attributes.sr} image={param.attributes.diagramImage.data!=null && `${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="diagram3"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Diagram option={param.attributes.options} id={param.attributes.sr} sr={param.attributes.sr} image={param.attributes.diagramImage.data!=null && `${param.attributes.diagramImage.data[0].attributes.formats.small.url}`} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect"){
            {console.log(param.attributes.questionText)}
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect id={param.attributes.sr} option={param.attributes.options} sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect2"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect id={param.attributes.sr} sr={param.attributes.sr}  questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect3"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect4"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect id={param.attributes.sr} sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect5"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect id={param.attributes.sr} sr={param.attributes.sr} questionText={param.attributes.questionText} /> </> 
        }
        if(param.attributes.questionType==="ChooseCorrect6"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="ChooseCorrect7"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect8"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="ChooseCorrect9"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="ChooseCorrect10"){
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <ChooseCorrect sr={param.attributes.sr} questionText={param.attributes.questionText} /> </>
        } 
        if(param.attributes.questionType==="summary" && param.attributes.heading!=null){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText!=null && param.attributes.questionText} /> </>
        }
        if(param.attributes.questionType==="summary2" && param.attributes.heading!=null){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText} summaryInput={param.attributes.summaryInput} /> </>
        }
        if(param.attributes.questionType==="summary3" && param.attributes.heading!=null){ 
            return <> {param.attributes.heading&&<h4>{param.attributes.heading}</h4>} <Summary id={param.attributes.sr} sr={param.attributes.sr} srEnd={param.attributes.srEnd} questionText={param.attributes.questionText} summaryInput={param.attributes.summaryInput} /> </>
        }
    }
    

  return (
    <div>
        {obj.length===0?<span class="loader"></span>:obj.map((param)=>{ 
            return blan(param);
        })}
    </div>
  )
}

export default QuestionsListening