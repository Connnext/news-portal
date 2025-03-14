import { IPostCardProps } from "@entities/post/model/post.types"

import { Button, Card, Image, Text } from "@chakra-ui/react"

export default function PostCard({ post }: IPostCardProps) {
  return (
    <Card.Root maxW="xl" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.body}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Like</Button>
        <Button variant="ghost">Comment</Button>
        <Button variant="ghost">Forward</Button>
      </Card.Footer>
    </Card.Root>
  )
}
