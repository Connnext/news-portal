// import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import { describe, it, expect } from "vitest"
// import DynamicInput from "./DynamicInput"

// describe("DynamicInput", () => {
//   it("рендерит метку и поле ввода", () => {
//     render(<DynamicInput label="Имя" />)

//     expect(screen.getByText("Имя")).toBeInTheDocument()
//     expect(screen.getByRole("textbox")).toBeInTheDocument()
//   })

//   //   it("отображает ошибку при передаче error", () => {
//   //     render(<DynamicInput label="Имя" error="Ошибка ввода" />)

//   //     expect(screen.getByText("Ошибка ввода")).toBeInTheDocument()
//   //     expect(screen.getByRole("textbox")).toHaveStyle("border-color: red.500")
//   //   })

//   //   it("меняет стиль метки при фокусе", async () => {
//   //     render(<DynamicInput label="Имя" />)
//   //     const input = screen.getByRole("textbox")

//   //     await userEvent.click(input)
//   //     expect(input).toHaveFocus()
//   //   })

//   //   it("обновляет значение при вводе текста", async () => {
//   //     render(<DynamicInput label="Имя" />)
//   //     const input = screen.getByRole("textbox")

//   //     await userEvent.type(input, "Тест")
//   //     expect(input).toHaveValue("Тест")
//   //   })
// })

import { screen } from "@testing-library/react"
import DynamicInput from "./DynamicInput"

import { describe, expect, it } from "vitest"
import { render } from "@__test__/render"

describe("DynamicInput", () => {
  it("рендерит метку и поле ввода", () => {
    render(<DynamicInput label="Имя" />)

    expect(screen.getByText("Имя")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  // Другие тесты...
})

// import { render, screen } from "@testing-library/react"
// import { ChakraProvider } from "@chakra-ui/react" // Импортируйте ChakraProvider
// import DynamicInput from "./DynamicInput"

// import { describe, expect, it } from "vitest"
// import theme from "./../../../../theme"

// describe("DynamicInput", () => {
//   it("рендерит метку и поле ввода", () => {
//     render(
//       <ChakraProvider value={theme}>
//         {" "}
//         {/* Оборачиваем компонент в ChakraProvider */}
//         <DynamicInput label="Имя" />
//       </ChakraProvider>,
//     )

//     expect(screen.getByText("Имя")).toBeInTheDocument()
//     expect(screen.getByRole("textbox")).toBeInTheDocument()
//   })

//   // Другие тесты...
// })
