import React from "react";
import "./style.css";

function characters({name,image,bending,age}) {
  return (
    <div className="row">
      <div className = "col">{name}</div>
      <div className = "col">
           <div className="img-container"><img alt={name} src={image}/></div>
      </div>
      <div className = "col">{bending}</div>
      <div className = "col">{age}</div>

    </div>
    

  );
}

export default characters;
