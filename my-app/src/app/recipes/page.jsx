import dynamic from "next/dynamic";


const RecipesList = dynamic(() => import("@/components/RecipesList"), {
  loading: () => <p>Loading Recipes...</p>, 
  ssr: false, 
});

export const metadata = {
  title: "Recipes",
  description: "about recipes ",
};

export default function RecipesPage() {
  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <RecipesList />
      </div>
    </div>
  );
}
