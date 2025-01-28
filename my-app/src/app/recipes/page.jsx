import { Box, CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";


const RecipesList = dynamic(() => import("@/components/RecipesList"), {
  loading: () => <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    bgcolor: "background.default",
  }}
>
  <CircularProgress />
</Box>, 
  ssr: false, 
});

export const metadata = {
  title: "Recipes",
  description: "about recipes ",
};

export default function RecipesPage() {
  return (
    <div>
      {/* <h1>Recipes</h1> */}
      <div>
        <RecipesList />
      </div>
    </div>
  );
}
