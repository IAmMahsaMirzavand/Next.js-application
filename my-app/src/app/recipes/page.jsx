import CardRecipes from '@/components/CardRecipes';
import { getData } from '@/utils/action'
import React from 'react'

async function page() {

    const data = await getData('https://dummyjson.com/recipes')

    const recipes = data.recipes.slice(0,7);
  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
{recipes.map((recipe) => (

<CardRecipes key={recipe.id} data={recipe} type={"recipes"} />

))}

</div>
</div>
    </>
  )
}

export default page