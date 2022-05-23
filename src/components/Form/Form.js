import React, { useState } from "react";
import { romanConverterFunction } from "./romanConverterFunction";

import "./Form.css";

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [roman, setRoman] = useState('Esperando un número');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    converter(inputValue);
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
      <form onSubmit={ handleSubmit }>
        <label>
          Número:
          <input
            type="text"
            name="number"
            value={inputValue}
            onChange={ handleInputChange }
          />
        </label>
        <button>Convertir</button>
      </form>
      <h1 className="result" role="result"> {roman} </h1>
    </>
  )
}