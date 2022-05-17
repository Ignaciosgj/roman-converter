import React, { useState } from "react";
import { romanConverterFunction } from "./romanConverterFunction";

import "./input.css";

export const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [roman, setRoman] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    converter(e.target.value);
  }

  const converter = (number) => {
    try {
      let output = romanConverterFunction(number);
      setRoman(output);
    } catch (error) {
      setRoman(error.message);
    }
  }

  return (
    <>
    <input
      placeholder="Escriba un número"
      value = { inputValue }
      onChange = { handleInputChange }
    />
      {
        inputValue === "" ? 
        <div role="default" className="output"> Esperando un número ☺</div> :
        <div role="result" className="output"> {roman} </div>
      }
    </>
  )
}




