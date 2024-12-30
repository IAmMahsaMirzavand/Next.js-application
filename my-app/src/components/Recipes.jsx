import { getData } from '@/utils/action'
import React from 'react'
// import CardRecipes from '../components/CardRecipes'

import Card from "./Card";

async function recipes() {

    const recipesData = await getData('https://dummyjson.com/recipes')
    
    
  return (
    <div>
        
        <h1>recipes</h1>
      <div>{recipesData.recipes.map(recipe => <Card key={recipe.id} data={recipe} type="recipes" />)}</div>
    </div>
  )
}

export default recipes








