import { IPostCardProps } from "@entities/post/model/post.types"

import { Alert, Button, Card, Image, Stack, Text } from "@chakra-ui/react"
import { Toaster, toaster } from "@shared/ui/components/toaster"

export default function PostCard({ post }: IPostCardProps) {
  return (
    <Card.Root
      maxW="xl"
      overflow="hidden"
      border={"none"}
      backgroundColor={"transparent"}
    >
      <Image
        boxShadow={"xs"}
        borderTopRadius={"2xl"}
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2" borderBottomRadius={"none"}>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Like</Button>
        <Stack gap="4" width="full">
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>
              There was an error processing your request
            </Alert.Title>
          </Alert.Root>

          <Alert.Root status="info">
            <Alert.Indicator />
            <Alert.Title>
              Chakra is going live on August 30th. Get ready!
            </Alert.Title>
          </Alert.Root>

          <Alert.Root status="warning">
            <Alert.Indicator />
            <Alert.Title>
              Seems your account is about expire, upgrade now
            </Alert.Title>
          </Alert.Root>

          <Alert.Root status="success">
            <Alert.Indicator />
            <Alert.Title>Data uploaded to the server. Fire on!</Alert.Title>
          </Alert.Root>
        </Stack>

        <Button
          size="sm"
          variant="outline"
          key={"success"}
          onClick={() =>
            toaster.create({
              description: "File saved successfully",
              type: "info",
            })
          }
        >
          {"success"}
        </Button>
        <Button variant="ghost">Comment</Button>
        <Button variant="ghost">Forward</Button>
        <Toaster />
      </Card.Footer>
    </Card.Root>
  )
}
