import { getData } from '@/utils/action'
import React from 'react'
import CardItem from "../../components/CardItem";
async function users() {

const data = await getData('https://dummyjson.com/users')

const users = data.users.slice(0,7); 
  return (
    <>
     <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {users.map((user) => (

<CardItem  key={user.id} data={user}  type={"users"}  />
    ))}
    
    </div>
    </div>
    </>
  )
}

export default users




