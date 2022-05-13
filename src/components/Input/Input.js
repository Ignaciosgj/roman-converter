import React, { useState } from "react";
import TextField from '@mui/material/TextField';

export const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [roman, setRoman] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    converter(e.target.value);
  }

  const converter = (number) => {
    if (!Number.isInteger(Number(number))) return setRoman("Sólo se aceptan números entre el 1 y el 4999 :(");
    if (number > 4999) return setRoman("El número máximo es 4999 !");
    let output = '', relative;
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
  
    for (let i of Object.keys(roman)) {
      relative = Math.floor(number / roman[i]);
      number -= relative * roman[i];
      output += i.repeat(relative);
    }
    setRoman(output);
  }

  return (
    <>
    <TextField
      id="outlined-required"
      label="Escriba un número"
      value = { inputValue }
      onChange = { handleInputChange }
    />
    <h1> { roman } </h1>
    </>
  )
}