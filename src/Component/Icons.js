import React from "react";
import "./Icons.css";

function Icons({ Logo, title, Avatar }) {
 
  return (
    <div className="Icon_logo">
      {Logo && <Logo />}

      <span>{title}</span>
    </div>
  );
}
export default Icons;
