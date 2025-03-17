export interface IPost {
  id: number
  userId: number
  title: string
  description: string
}
export interface IPostCardProps {
  post: IPost
}
export interface IPostsCardsProps {
  posts: IPost[]
}
