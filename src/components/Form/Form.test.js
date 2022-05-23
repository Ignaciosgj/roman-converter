import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';

beforeEach(() => {
  //arrange
  render(<Form />)
})
describe("For Form component", () => {
  it("should render an input", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);

    //assert
    expect(inputEl).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    //act
    const submitEl = screen.getByText(/convertir/i);

    //assert
    expect(submitEl).toBeInTheDocument();
  });

  it("should render text 'esperando un número'", () => {
    //act 
    const resultEl = screen.getByText(/esperando un número/i);

    //assert
    expect(resultEl).toBeInTheDocument();
  });

  it("given the input '1' it shoudl return 'I'", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);
    const submitEl = screen.getByText(/convertir/i);
    const resultEl = screen.getByRole("result");

    fireEvent.change(inputEl, {target: {value: '1'}});
    fireEvent.click(submitEl);

    //assert
    expect(resultEl.innerHTML.trim()).toEqual('I');
  });

  it("given the input '4999' it shoudl return ''", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);
    const submitEl = screen.getByText(/convertir/i);
    const resultEl = screen.getByRole("result");

    fireEvent.change(inputEl, {target: {value: '4999'}});
    fireEvent.click(submitEl);

    //assert
    expect(resultEl.innerHTML.trim()).toEqual('MMMMCMXCIX');
  });

  it("given the input 'a' it shoudl return an error 'Sólo se aceptan números entre el 1 y el 4999 :('", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);
    const submitEl = screen.getByText(/convertir/i);
    const resultEl = screen.getByRole("result");

    fireEvent.change(inputEl, {target: {value: 'a'}});
    fireEvent.click(submitEl);

    //assert
    expect(resultEl.innerHTML.trim()).toEqual('Sólo se aceptan números entre el 1 y el 4999 :(');
  });

  it("given the input '5000' it shoudl return an error 'El número máximo es 4999 !'", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);
    const submitEl = screen.getByText(/convertir/i);
    const resultEl = screen.getByRole("result");

    fireEvent.change(inputEl, {target: {value: '5000'}});
    fireEvent.click(submitEl);

    //assert
    expect(resultEl.innerHTML.trim()).toEqual('El número máximo es 4999 !');
  });

})