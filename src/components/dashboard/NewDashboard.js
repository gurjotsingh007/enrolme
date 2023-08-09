import React from 'react'
import "./NewDashboard.css"
import enrolme from "../photos/enrolme.png";
import microphone from "../photos/microphone.png";
import writing from "../photos/writing.png";
import listening from "../photos/listening.png";
import reading from "../photos/reading.png";
import feedback from "../photos/feedback.png";
import contact from "../photos/contact.png";
import logout from "../photos/logout.png";


function NewDashboard(props) {
  const {Component} = props

  function handleLogout(){
    localStorage.removeItem('token');
    window.location.reload(true);
  }
  return (
    <div className="row">
      <div className="firstcol col-2">
        <div className="enrolmediv">
          <img
            src={enrolme}
            style={{
              height: "34px",
              width: "32px",
              margin: "0 0.6rem 1rem 0rem"
            }}
            alt=""
          />
          <p className="enrolme">ENROLME</p>
        </div>
        <div>
          <div className="modules">
            <h5 style={{ color: "rgb(238, 238, 238)" }}> Modules </h5>

            <div className="moduleIelts">
              <span>
                <img
                  style={{ height: "18px", width: "18px" }}
                  className="icon"
                  src={microphone}
                />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/dashspeaking"
              >
                Speaking
              </a>
            </div>

            <div className="moduleIelts">
              <span>
                <img className="icon" src={writing} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/dashwriting"
              >
                Writing
              </a>
            </div>

            <div className="moduleIelts">
              <span>
                <img className="icon" src={listening} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/dashlistening"
              >
                Listening
              </a>
            </div>

            <div className="moduleIelts">
              <span>
                <img className="icon" src={reading} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/dashreading"
              >
                Reading
              </a>
            </div>
          </div>

          <div className="feedback">
            <div className="moduleIelts">
              <span>
                <img className="icon" src={feedback} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/contact"
              >
                Feedback
              </a>
            </div>
          </div>

          <div className="contact">
            <div className="moduleIelts">
              <span>
                <img className="icon" src={contact} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="logout">
            <div className="moduleIelts">
              <span>
                <img className="icon" src={logout} />
              </span>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="secondcol col">
        {Component && <Component />}
      </div>
    </div>
  )
}

export default NewDashboard