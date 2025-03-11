import { render, screen } from "@testing-library/react"
import IconButton from "./IconButton"

describe("IconButton", () => {
  test("rendering content", () => {
    render(<IconButton ariaLabel="Test Button">Hello World!</IconButton>)

    expect(screen.getByText("Hello World!")).toBeInTheDocument()
  })
})
