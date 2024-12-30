import { getData } from '@/utils/action'
import React from 'react'

export default async function page({params}) {

    const recipes = await getData(`https://dummyjson.com/recipes/${params.id}`)
  return (
    <div>
        <p>{recipes.instructions}</p>
    </div>
  )
}
