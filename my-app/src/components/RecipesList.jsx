// app/recipes/RecipesList.js
// import { fetchData } from '../lib/fetchData';
// import Card from '../components/Card';

// export default async function RecipesList() {
//   const { recipes } = await fetchData('https://dummyjson.com/recipes');
//   return (
//     <div>
//       {recipes.map(recipe => (
//         <Card key={recipe.id} item={recipe} type="recipes" />
//       ))}
//     </div>
//   );
// }




import { fetchData } from '../lib/fetchData';
import CardList from '../components/CardList';  

export default async function RecipesList() {
  const { recipes } = await fetchData('https://dummyjson.com/recipes');
  
  return (
    <div>
    
      <CardList items={recipes} type="recipes" />
    </div>
  );
}