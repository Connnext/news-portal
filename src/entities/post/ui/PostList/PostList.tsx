import React from "react"
import PostCard from "../PostCard"
import { IPostsCardsProps } from "@entities/post/model/post.types"

export default function PostList({ posts }: IPostsCardsProps) {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
