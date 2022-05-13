import React from "react";
import { Input } from "../Input/Input";

export const RomanConverter = () => {

  return (
    <div>
      <h1> Conversor a números romanos </h1>
      <hr></hr>
      <div className="description">Escribe un número (entre 1 y 4999) para realizar la conversión a números romanos</div>
      <Input />
    </div>
  )
}