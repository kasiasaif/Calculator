import React from "react";
import "../App.css";

const Buttons = ({ onClick }) => {
  return (
    <div>
      <div  className = "buttons" >
        <button value="+" onClick={(val) => {onClick(val.target.value)}}>{" "}+{" "}</button>
        <button value="*" onClick={(val) => {onClick(val.target.value)}}>{" "}*{" "}</button>
        <button value="/" onClick={(val) => {onClick(val.target.value)}}>{" "}/{" "}</button>
      </div> 
      <div className = "buttons">
      <button value="%" onClick={(val) => {onClick(val.target.value)}}>{" "}%{" "}</button>
        <button value="-" onClick={(val) => { onClick(val.target.value)}}>{" "}-{" "}</button>
        <button value="=" onClick={(val) => { onClick(val.target.value)}}>{" "}={" "}</button>
      </div>
      <div className = "buttons">
      </div>
      <div className = "buttons">
        <button value="1" onClick={(val) => {onClick(val.target.value)}}>{" "}1{" "}</button>
        <button value="2" onClick={(val) => {onClick(val.target.value)}}>{" "}2{" "}</button>
        <button value="3" onClick={(val) => {onClick(val.target.value)}}>{" "}3{" "}</button>
      </div>
      <button value="4" onClick={(val) => {onClick(val.target.value)}}>{" "}4{" "}</button>
      <button value="5" onClick={(val) => {onClick(val.target.value)}}>{" "}5{" "}</button>
      <button value="6" onClick={(val) => {onClick(val.target.value)}}>{" "}6{" "}</button>
      <div className = "buttons">
        <button value="7" onClick={(val) => {onClick(val.target.value)}}>{" "}7{" "}</button>
        <button value="8" onClick={(val) => { onClick(val.target.value)}}>{" "}8{" "}</button>
        <button value="9" onClick={(val) => {onClick(val.target.value)}}>{" "}9{" "}</button>
      </div>
      <button value="Clear" onClick={(val) => {onClick(val.target.value);}}>{" "}Clear{" "}</button>
      <button value="0" onClick={(val) => {onClick(val.target.value)}}>{" "}0{" "}</button>
      <button value="BackSpace" onClick={(val) => {onClick(val.target.value)}}>{" "}Back{" "}</button>

    </div>
  );
}

export default Buttons;