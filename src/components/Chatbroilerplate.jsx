import React from 'react'
import { FaRobot } from 'react-icons/fa';

const Chatbroilerplate = () => {
  return (
    <div className="main">
      <div className="msg_box_main">
        <div className="robo_border">
          <p className="robo">
            <FaRobot />
          </p>
        </div>
      </div>
      <p className="tagline">How can I assist You!</p>
      <div className="sample_qua_main">
        <div className="que_1">
          <p className="que_1_p">What is the name?</p>
          <p>the name is.....</p>
        </div>
        <div className="que_2">
          <p className="que_2_p">What are the skills?</p>
          <p>the skills are.....</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbroilerplate
