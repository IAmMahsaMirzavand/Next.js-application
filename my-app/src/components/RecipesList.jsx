import CardList from '../components/CardList';  
import { getData } from '@/utils/actions';

export default async function RecipesList() {
  const { recipes } = await getData('http://localhost:3000/api/v1/recipes');
  
  return (
    <div>
    
      <CardList items={recipes} type="recipes" />
    </div>
  );
}