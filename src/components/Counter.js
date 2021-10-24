import { React, useState } from "react";
import Buttons from "../components/Buttons";
import { evaluate } from "mathjs";



const Counter = () => {

  const [value, setValue] = useState("0");


  const  calculate = () => {
    setValue(evaluate(value).toString());
  }

  const keyPress = (key) => {
    if (key === "=") {calculate();
    } else if (key === "BackSpace") {
      if (value.length > 1) {
        setValue(value.slice(0, -1));
      } else {
        setValue("0"); 
      }
    } else if (key === "Clear") {
      setValue("0");
    } else {
      if (value === "0") {
        setValue(key); 
      } else setValue(value + key);
    }
  }

  return (
    <>
      <div className="result">
        {" "}
        {value}{" "}
      </div>
      <Buttons onClick={keyPress} />
    </>
  );
}

export default Counter;