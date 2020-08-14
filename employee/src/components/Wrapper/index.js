import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper"style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>{props.children}</div>;
}

export default Wrapper;
