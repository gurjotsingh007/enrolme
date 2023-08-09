import React from 'react'
import "./Card.css"

function Card(props) {
  return (
        <div class="card col-lg-3 col-md-4" style={{width: "18rem",padding:"0"}}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text"><span><i class="fa-solid fa-location-dot"></i></span> {props.text}</p>
            <a href={props.url} target="_blank" class="btn btn-primary" style={{backgroundColor:"#0087ca"}}>Visit College Website</a>
        </div>
        </div>
  )
}

export default Card
