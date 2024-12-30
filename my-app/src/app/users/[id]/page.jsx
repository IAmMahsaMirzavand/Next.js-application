import { getData } from '@/utils/action'
import React from 'react'

export default async function page({params}) {

    const users = await getData(`https://dummyjson.com/users/${params.id}`)
  return (
    <div>
        
        <h1>{users.firstName} {users.lastName}</h1>

        
        </div>
  )
}
