import { screen } from "@testing-library/react"
import { render } from "@__test__/render"
import { describe, it, expect } from "vitest"
import IconButton from "./IconButton"

describe("IconButton", () => {
  it("rendering content", () => {
    render(<IconButton ariaLabel="Test Button">Hello World!</IconButton>)

    expect(screen.getByText("Hello World!")).toBeInTheDocument()
  })
})
