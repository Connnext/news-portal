import { Button, For, HStack } from "@chakra-ui/react"
import { toaster } from "../components/toaster"

export default function Toast() {
  return (
    <HStack>
      <For each={["success", "error", "warning", "info"]}>
        {type => (
          <Button
            size="sm"
            variant="outline"
            key={type}
            onClick={() =>
              toaster.create({
                title: `Toast status is ${type}`,
                type: type,
              })
            }
          >
            {type}
          </Button>
        )}
      </For>
    </HStack>
  )
}
