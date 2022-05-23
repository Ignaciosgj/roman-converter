import { render, screen } from "@testing-library/react"
import { App } from "./App"


beforeEach(() => {
  render(<App />)
})
describe("For App component", () => {
  it("It should render header component", () => {
    //act
    const headerEl = screen.getByText(/roman converter/i)

    //assert
    expect(headerEl).toBeInTheDocument();
  });

  it("it should render an input", () => {
    //act
    const inputEl = screen.getByLabelText(/número/i);

    //assert
    expect(inputEl).toBeInTheDocument();
  });

  it("it should render a button", () => {
    //act
    const butonEl = screen.getByText(/convertir/i);

    //assert
    expect(butonEl).toBeInTheDocument();
  })

})