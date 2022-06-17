import React from "react";
import './Background.scss';

function Background(props){
  return(
    <section className="bg" style={props.style}></section>
  )
}

export default Background;