import React, { useState } from "react";
import { romanConverterFunction } from "./romanConverterFunction";
import { isNotAnInteger } from "../../helpers/isNotAnInteger";

import "./input.css";

const MAX_ROMAN_NUMBER = 4999;
export const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [roman, setRoman] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    converter(e.target.value);
  }

  const converter = (number) => {
    if (isNotAnInteger(number)) return setRoman("Sólo se aceptan números entre el 1 y el 4999 :(");
    if (isBiggerThan(number, MAX_ROMAN_NUMBER)) return setRoman("El número máximo es 4999 !");
    let output = romanConverterFunction(number);
    setRoman(output);
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



function isBiggerThan(number, maxNumber) {
  return number > maxNumber;
}

