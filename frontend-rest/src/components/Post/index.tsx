import Link from 'next/link'
import { getDate } from 'utils'

export type SinglePostType = {
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  modified: Date
  slug: string
  id: string
}

export type PostType = {
  post: SinglePostType
}

export type PostsType = {
  posts: SinglePostType[]
}

export default function Post({ post }: PostType) {
  return (
    <div>
      <h1>{post.title.rendered}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered,
        }}
      />

      <p>{getDate(post.modified)}</p>

      <Link href={`/posts/${post.slug}`}>
        <a>View Post</a>
      </Link>
    </div>
  )
}
