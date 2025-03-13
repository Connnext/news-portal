import { describe, it, expect, vi } from "vitest"
import { screen } from "@testing-library/react"
import { render } from "@__test__/render"
import userEvent from "@testing-library/user-event"
import IconButton from "./IconButton"

describe("IconButton", () => {
  /*** 1. Проверка атрибутов ***/
  it("has correct atributes", () => {
    render(<IconButton ariaLabel="Test Button">Hello World!</IconButton>)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("aria-label", "Test Button")
  })

  /*** 2. Проверка кликабельности ***/
  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn()
    render(
      <IconButton ariaLabel="Test Button" onClick={handleClick}>
        Click me
      </IconButton>,
    )

    const button = screen.getByRole("button")
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

// import { describe, it, expect, vi } from "vitest"
// import { screen } from "@testing-library/react"
// import { render } from "@__test__/render"
// import userEvent from "@testing-library/user-event"
// import IconButton from "./IconButton"

// describe("IconButton", () => {
//   /*** 1. Проверка рендеринга текста ***/
//   it("rendering content", () => {
//     render(<IconButton ariaLabel="Test Button">Hello World!</IconButton>)

//     expect(screen.getByText("Hello World!")).toBeInTheDocument()
//   })

//   /*** 2. Проверка атрибутов ***/
//   it("has correct atributes", () => {
//     render(<IconButton ariaLabel="Test Button">Hello World!</IconButton>)

//     const button = screen.getByRole("button")
//     expect(button).toHaveAttribute("aria-label", "Test Button")
//   })

//   /*** 3. Проверка кликабельности ***/
//   it("calls onClick when clicked", async () => {
//     const handleClick = vi.fn()
//     render(
//       <IconButton ariaLabel="Test Button" onClick={handleClick}>
//         Click me
//       </IconButton>,
//     )

//     const button = screen.getByRole("button")
//     await userEvent.click(button)

//     expect(handleClick).toHaveBeenCalledTimes(1)
//   })
// })
