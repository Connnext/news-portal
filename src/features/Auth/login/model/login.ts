import { SubmitHandler } from "react-hook-form"
import { FormValues } from "../ui/LoginForm/LoginForm.types"

export const loginSubmit: SubmitHandler<FormValues> = async data => {
  try {
    //в будущем запросы к Api
    console.log("Submitted data", data)
  } catch (error) {
    console.log("error", error)
  }
}
