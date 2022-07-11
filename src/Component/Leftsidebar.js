import React from "react";
import "./Leftsidebar.css";
import { Avatar } from "@mui/material";
import Middlebody from "./Middlebody";
import Rightside from "./Rightside";
import { useSelector } from "react-redux";
function Leftsidebar() {
  const {displayName,photoURL}=useSelector(state=>state.user.user)
  return (
    <div className="app_body">
      <div className="leftside_container">
        <div className="leftside_image">
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D16AQFEq15z7cEzbw/profile-displaybackgroundimage-shrink_350_1400/0/1652793304483?e=1661990400&v=beta&t=9Boqrzs4DH4OJJNbi528fkOWIslyVCQ8bS-FPkOtdpc"
            alt="Network error"
          />
          <div className="avatar_body">
          <Avatar src={photoURL} />
        </div>
        <div className="leftside_content">
          <h2>{displayName}</h2>
          <span>
            Graduated in 2021||electrical engineer||NIT Srinagar||Learning
            frontend technology
          </span>
          
        </div>
        </div>
        
        <div className="lefside_profiletraffic">
          <div className="info1">
            <span>Who viewed your profile </span>
            <span>36</span>
          </div>
          <div className="info1">
            <span>
              connections
              <br /> <strong>Grow your network</strong>
            </span>
            <span>120</span>
          </div>
        </div>
        
        <div className="leftside_recent">
          <p>Recent</p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
          <p className="hash">
            <span>#</span>Heading
          </p>
        </div>
      </div>

      <Middlebody />
      <Rightside/>
    </div>
  );
}
export default Leftsidebar;
