import CardPosts from '@/components/CardPosts';
import { getData } from '@/utils/action'
import React from 'react'

async function page() {

    const data = await getData('https://dummyjson.com/posts')

    const posts = data.posts.slice(0,7);
  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
{posts.map((post) => (

<CardPosts key={post.id} data={post} type={"posts"} />

))}

</div>
</div>
    </>
  )
}

export default page