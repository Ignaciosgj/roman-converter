import React from "react";
import { Input } from "./Input";

export const RomanConverter = () => {

  return (
    <div>
      <h1> Conversor a números romanos </h1>
      <div className="description">Escribe un número (entre 1 y 4999) para realizar la conversión a números romanos</div>
      <Input />
    </div>
  )
}