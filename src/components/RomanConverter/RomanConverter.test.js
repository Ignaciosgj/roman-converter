import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { RomanConverter } from './RomanConverter';

test('renders content', () => {
  const component = render(<RomanConverter />)

  console.log(component);

  component.getByText("Conversor a números romanos");
  component.getByText("Escribe un número (entre 1 y 4999) para realizar la conversión a números romanos");
  expect(component.container).toHaveTextContent("Conversor a números romanos");
  expect(component.container).toHaveTextContent("Escribe un número (entre 1 y 4999) para realizar la conversión a números romanos");
})