import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';


beforeEach(() => {
  //arrange
  render(<Input />);
})
describe("For the Input component", () => {
  it("it should render the input", () => {
    //assert
    const inputEl = screen.getByPlaceholderText(/escriba un número/i);

    //act

    expect(inputEl).toBeInTheDocument();
  });

  it("it should render default message 'Esperando un número'", () => {
    //assert
    const defaultMessage = screen.getByText(/esperando un número/i);

    //act
    expect(defaultMessage).toBeInTheDocument();
  })

  it("if the input recive a value '1' it should return 'I' instead of default message", () => {
    //arrange
    const expected = "I";

    //assert
    const inputEl = screen.getByPlaceholderText(/escriba un número/i);
    fireEvent.change(inputEl, { target: { value: "1" } });
    const resultEl = screen.getByRole("result");

    //act
    expect(resultEl.innerHTML.trim()).toEqual(expected);
  });

  it("if the input recive a value '4999' it should return 'MMMMCMXCIX' instead of default message", () => {
    //arrange
    const expected = "MMMMCMXCIX";

    //assert
    const inputEl = screen.getByPlaceholderText(/escriba un número/i);
    fireEvent.change(inputEl, { target: { value: "4999" } });
    const resultEl = screen.getByRole("result");

    //act
    expect(resultEl.innerHTML.trim()).toEqual(expected);

  });

  it("if the input recibe a value 'a' it should return 'Sólo se aceptan números entre el 1 y el 4999 :('", () => {
    //arrange
    const expected = "Sólo se aceptan números entre el 1 y el 4999 :(";

    //assert
    const inputEl = screen.getByPlaceholderText(/escriba un número/i);
    fireEvent.change(inputEl, { target: { value: "a" } });
    const resultEl = screen.getByRole("result");

    //act
    expect(resultEl.innerHTML.trim()).toEqual(expected);
  });

  it("if the input recive a value '5000' it should return 'El número máximo es 4999 !'", () => {
    //arrange
    const expected = "El número máximo es 4999 !";

    //assert
    const inputEl = screen.getByPlaceholderText(/escriba un número/i);
    fireEvent.change(inputEl, { target: { value: "5000" } });
    const resultEl = screen.getByRole("result");

    //act
    expect(resultEl.innerHTML.trim()).toEqual(expected);
  })
});