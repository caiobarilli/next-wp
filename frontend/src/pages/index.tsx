import Post, { PostsType } from 'components/Post'
import { getPosts } from 'utils/api'

export default function Home({ posts }: PostsType) {
  console.log(process.env.WORDPRESS_API_URL)

  return posts.map((post) => {
    // console.log(post['_embedded']['wp:featuredmedia'][0])

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
