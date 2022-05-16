import React from "react";
import { Input } from "../Input/Input";

import "./romanConverter.css";

export const RomanConverter = () => {

  return (
    <div class="container">
      <div class="circle-container">
        <div className="title">Conversor a números romanos</div>
        <div className="description">Escribe un número (entre 1 y 4999) para realizar la conversión a números romanos</div>
        <Input />
      </div>
    </div>
  )
}