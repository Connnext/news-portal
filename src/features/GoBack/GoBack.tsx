import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

import { BackIcon } from "@shared/ui/assets/icons"
import { Tooltip } from "@shared/ui/components/tooltip"
import IconButton from "@shared/ui/Buttons/IconButton"

export default function GoBack() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Tooltip
      openDelay={500}
      closeDelay={100}
      showArrow
      content={t("auth.back")}
    >
      <IconButton ariaLabel="Back" onClick={handleBack}>
        <BackIcon />
      </IconButton>
    </Tooltip>
  )
}
