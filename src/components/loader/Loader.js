import React from "react";
import "load-awesome/css/ball-spin.min.css";
import "./loader.scss";

export default function Loader(props) {
  return (
    <div className={props.isActive ? "la-ball-spin la-3x" : "is-hidden"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
