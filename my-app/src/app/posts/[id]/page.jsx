import { getData } from '@/utils/action'
import React from 'react'

async function page({params}) {
    const posts = await getData(`https://dummyjson.com/posts/${params.id}`)
  return (
    <div>
        <p>{posts.body}</p>
    </div>
  )
}

export default page