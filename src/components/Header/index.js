import React from "react";
import "./style.css";

function Header(pps) {
  return (
    <div className="row" >
      <div className = "column">Name</div>
      <div className = "column">
           <div className="img-container">Image</div>
      </div>
      <div className = "column" >Bending</div>
      <div className = "column">Age</div>

    </div>

  );
}

export default Header;
