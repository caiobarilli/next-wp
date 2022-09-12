import Post, { PostsType } from 'components/Post'
import { getPosts } from 'utils/api'

export default function Home({ posts }: PostsType) {
  return posts.map((post) => {
    return <Post post={post} key={post.id} />
  })
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  }
}
