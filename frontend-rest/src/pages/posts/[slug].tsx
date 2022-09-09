import Link from 'next/link'
import { PostType } from 'components/Post'
import { getPost, getSlugs } from 'utils/api'

type ParamsType = {
  params: {
    slug: string
  }
}

export default function PostPage({ post }: PostType) {
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getSlugs('posts')
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: ParamsType) {
  const post = await getPost(params.slug)
  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  }
}
