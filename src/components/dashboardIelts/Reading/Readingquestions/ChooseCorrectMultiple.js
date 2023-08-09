import React from 'react'

function ChooseCorrectMultiple(props) {
  return (
    <div>
        <p>{props.questionText} <input style={{margin:"0.5rem"}} type="text" /> </p>
    </div>
  )
}

export default ChooseCorrectMultiple