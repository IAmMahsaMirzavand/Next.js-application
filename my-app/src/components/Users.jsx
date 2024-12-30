import { getData } from '@/utils/action'
import React from 'react'
import Card from './Card'

async function users() {

    const usersData = await getData('https://dummyjson.com/users')
  return (
    <div>
        
        <h1>Users</h1>
      <div>{usersData.users.map(user => <Card key={user.id} data={user} type="users" />)}</div>
    </div>
  )
}

export default users