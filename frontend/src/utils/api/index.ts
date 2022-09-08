const API_URL = `${process.env.WORDPRESS_API_URL + '/posts'}`

export async function getPosts() {
  const postsRes = await fetch(API_URL)
  const posts = await postsRes.json()
  return posts
}

export async function getPost(slug: string) {
  const posts = await getPosts()

  const postArray = posts.filter((post: { slug: string }) => post.slug == slug)
  const post = postArray.length > 0 ? postArray[0] : null
  return post
}

export async function getSlugs(type: string) {
  let elements = []
  switch (type) {
    case 'posts':
      elements = await getPosts()
      break
  }
  const elementsIds = elements.map((element: { slug: string }) => {
    return {
      params: {
        slug: element.slug,
      },
    }
  })
  return elementsIds
}
