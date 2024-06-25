import React from "react";
import "./styles.css";

const Box = ({ children, ...rest}) => {
  return <div className="Box" style={{...rest}}>{children}</div>;
};

export default Box;
