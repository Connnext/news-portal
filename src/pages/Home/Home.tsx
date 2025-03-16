"use client"
import { Box, Flex } from "@chakra-ui/react"
import PostList from "@entities/post/ui/PostList"
import { useThemeColors } from "@shared/hooks/useThemeColor"

export default function Home() {
  const { backgroundContent, border } = useThemeColors()
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ]

  return (
    <Flex gap={4}>
      <Box
        flex={2}
        borderRadius={"2xl"}
        background={backgroundContent}
        boxShadow="lg"
        border={"1px solid"}
        borderColor={border}
      >
        <PostList posts={posts} />
      </Box>
      <Box
        borderWidth="2px"
        flex={1}
        p="4"
        boxShadow="lg"
        border={"1px solid"}
        borderColor={border}
        borderRadius={"2xl"}
        background={backgroundContent}
        maxH={"lg"}
        position="sticky" // Используем sticky
        top="20" // Прилипает к верхней части экрана при прокрутке
        zIndex={10} // Устанавливаем уровень, чтобы элемент был выше
      >
        <div>
          <h1>Stories</h1>
          <h1>CreateNewPost</h1>
        </div>
      </Box>
    </Flex>
  )
}
