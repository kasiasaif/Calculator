import React from "react";
import "../App.css";

const Buttons = ({ onClick }) => {
  return (
    <div>
      <div  className = "buttons1" >
        <button className="btn" value="+" onClick={(val) => {onClick(val.target.value)}}>{" "}+{" "}</button>
        <button className="btn" value="*" onClick={(val) => {onClick(val.target.value)}}>{" "}*{" "}</button>
        <button className="btn" value="/" onClick={(val) => {onClick(val.target.value)}}>{" "}/{" "}</button>
      </div> 
      <div className = "buttons1">
      <button  className="btn" value="%" onClick={(val) => {onClick(val.target.value)}}>{" "}%{" "}</button>
        <button  className="btn" value="-" onClick={(val) => { onClick(val.target.value)}}>{" "}-{" "}</button>
        <button  className="btn" id="q" value="=" onClick={(val) => { onClick(val.target.value)}}>{" "}={" "}</button>
      </div>
      
      <div className = "buttons1">
        <button className="button"value="1" onClick={(val) => {onClick(val.target.value)}}>{" "}1{" "}</button>
        <button  className="button" value="2" onClick={(val) => {onClick(val.target.value)}}>{" "}2{" "}</button>
        <button  className="button"value="3" onClick={(val) => {onClick(val.target.value)}}>{" "}3{" "}</button>
      </div>
      <div className = "buttons1">
      <button  className="button"value="4" onClick={(val) => {onClick(val.target.value)}}>{" "}4{" "}</button>
      <button  className="button" value="5" onClick={(val) => {onClick(val.target.value)}}>{" "}5{" "}</button>
      <button  className="button" value="6" onClick={(val) => {onClick(val.target.value)}}>{" "}6{" "}</button>
      </div>
      <div className = "buttons1">
        <button  className="button" value="7" onClick={(val) => {onClick(val.target.value)}}>{" "}7{" "}</button>
        <button  className="button"value="8" onClick={(val) => { onClick(val.target.value)}}>{" "}8{" "}</button>
        <button  className="button" value="9" onClick={(val) => {onClick(val.target.value)}}>{" "}9{" "}</button>
      </div>
      <div className = "buttons1">
      <button  className="btn"  id="z" value="Clear" onClick={(val) => {onClick(val.target.value);}}>{" "}Clear{" "}</button>
      <button className="button" value="0" onClick={(val) => {onClick(val.target.value)}}>{" "}0{" "}</button>
      <button  className="btn" id="z" value="BackSpace" onClick={(val) => {onClick(val.target.value)}}>{" "}Back{" "}</button>
      </div>
    </div>
  );
}

export default Buttons;