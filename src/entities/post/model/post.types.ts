export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
export interface IPostCardProps {
  post: IPost
}
export interface IPostsCardsProps {
  posts: IPost[]
}
