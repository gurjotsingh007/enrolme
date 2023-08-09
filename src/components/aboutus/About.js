import React from 'react'
import "./About.css"

function About() {
  return (
    <div>
        <div class="feat bg-gray pt-5 pb-5">
            <div class="container">
            <div class="row">
                <div class="section-head col-sm-12">
                <h4><span className='fonthead'>Why Choose</span> Us?</h4>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_one"><i class="fa-solid fa-mobile-screen"></i></span>
                    <h5 className='font'>Modern Classes</h5>
                    <p className='fontp'>We provide 1:1 interaction with students in online and offline mode.</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_two"><i class="fa-solid fa-spell-check"></i></span>
                    <h5 className='font'>Free Mock Tests</h5>
                    <p className='fontp'>Mock tests can help you analyze yourself better. You can know your weak concepts, and strengths</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
                    <h5 className='font'>24 x 7 User Support</h5>
                    <p className='fontp'>If our customer has any problem and any query we are always happy to help then.</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_four"><i class="fa-solid fa-clock"></i></span>
                    <h5 className='font'>Flexible Schedule</h5>
                    <p className='fontp'> You are free to make your own daily or weekly schedule.Also, you are free to speed up within the week when something is easy for you</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
                    <h5 className='font'>Doubt Sessions</h5>
                    <p className='fontp'>A doubt clearing session will save you time as you can get clarity about concepts, formulas, etc. This is also an excellent way to learn several problem-solving methods, shortcuts, and tricks to approach a particular question.</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_six"><i class="fa-solid fa-plane"></i></span>
                    <h5 className='font'>Affordable cost</h5>
                    <p className='fontp'>Open and affordable course markings are grounded in the idea of transparently communicating course material costs to students so they can make informed decisions when enrolling in classes.</p>
                </div>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default About