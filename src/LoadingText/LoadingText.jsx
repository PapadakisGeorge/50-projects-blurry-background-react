import React from "react";
import './LoadingText.scss';

function LoadingText(props) {
  return(
    <div className="loading-text">{`${props.load}%`}</div>
  )
};

export default LoadingText;