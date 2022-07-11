import React from "react";
import "./Rightside.css";
import AnnouncementSharpIcon from "@mui/icons-material/AnnouncementSharp";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Rightside() {
  return (
    <div className="right_sidecontainer">
      <div className="rightbar_box1">
        <div className="right_header">
          <span>LinkedIn News</span>
          <AnnouncementSharpIcon />
        </div>
        <div className="right_body">
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>
                7d ago <strong>.</strong>2220 readers
              </span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbar_box2">
        <div className="right_header">
          <span>Today's top courses</span>
          <AnnouncementSharpIcon />
        </div>

        <div className="right_body">
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>
                7d ago <strong>.</strong>2220 readers
              </span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
          <div className="list_item">
            <RadioButtonUncheckedIcon />
            <div className="list_content">
              <h2>Shorter planning cycles the new growth </h2>
              <span>7d ago .2220 readers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rightside;
