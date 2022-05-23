import { render, screen } from "@testing-library/react"
import { Header } from "./Header";


describe("For Header component", () => {
  it("should render the title 'Roman Converter'", () => {
    //arrange
    render(<Header />)

    //act
    const titleEl = screen.getByText(/roman converter/i);

    //assert
    expect(titleEl).toBeInTheDocument();
  })
})