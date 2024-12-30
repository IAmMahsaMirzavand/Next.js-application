import { getData } from '@/utils/action'
import React from 'react'
import Card from './Card'

async function posts() {

    const postsData = await getData('https://dummyjson.com/posts')
  return (
    <div>
        
        <h1>posts</h1>
      <div>{postsData.posts.map(post => <Card key={post.id} data={post} type="posts" />)}</div>
    </div>
  )
}

export default posts