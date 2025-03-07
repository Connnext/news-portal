import { Box, Field, Input, InputProps, defineStyle } from "@chakra-ui/react"
import { useThemeColors } from "@shared/hooks/useThemeColor"

interface DynamicInputProps extends InputProps {
  label: string
  error?: string
}

export default function DynamicInput({
  label,
  error,
  ...props
}: DynamicInputProps) {
  const { backgroundContent, textPrimary } = useThemeColors()

  return (
    <Field.Root gap={1}>
      <Box pos="relative" w="full">
        <Input
          className="peer"
          placeholder=""
          borderWidth={"1px"}
          borderColor={error ? "red.500" : "gray.200"}
          _focusVisible={{
            outline: "none",
            borderWidth: "2px",
          }}
          transition={"background 0.1s ease-in-out color 0.1s ease-in-out"}
          {...props}
        />
        <Field.Label
          p={"0 8px"}
          borderRadius={"md"}
          color={error ? "red.500" : textPrimary}
          bg={backgroundContent}
          css={floatingStyles}
        >
          {label}
        </Field.Label>
      </Box>
      {error && (
        <Box pl={1} color="red.500" fontSize="xs" fontWeight={"500"}>
          {error}
        </Box>
      )}
    </Field.Root>
  )
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})
