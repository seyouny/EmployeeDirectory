import React from "react";

function col(props) {
  return (
    <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
      {props.children}
    </div>

  );
}

export default col;