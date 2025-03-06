import { useNavigate } from "react-router"

import { BackIcon } from "@shared/ui/assets/icons"
import IconButton from "@shared/ui/Buttons/IconButton"

export default function GoBack() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <IconButton ariaLabel="Back" onClick={handleBack}>
      <BackIcon />
    </IconButton>
  )
}
