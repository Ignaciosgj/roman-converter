import React from "react";
import { Form } from "../Form/Form";
import { Header } from "../Header/Header";

import "./App.css";
export const App =  () => {

  return (
    <div className="container">
      <div className="circle-container">
        <Header />
        <Form />
      </div>
    </div>
  )
}