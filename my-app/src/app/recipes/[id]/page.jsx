// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   CardHeader,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";
// import Link from "next/link";
// import { fetchData } from "@/lib/fetchData";

// export async function generateMetadata({ params }) {
//   const recipe = await fetchData(`https://dummyjson.com/recipes/${params.id}`);
//   return {
//     title: `Recipe: ${recipe.name}`,
//     description: `Details of the recipe ${recipe.name}`,
//   };
// }

// const RecipeCard = async ({ params }) => {
//   const recipe = await fetchData(`https://dummyjson.com/recipes/${params.id}`);

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="90vh"
//       padding={2}
//     >
//       <Card
//         sx={{
//           bgcolor: "slategray",
//           width: "100%",
//           maxWidth: "800px",
//           margin: "16px auto",
//           boxShadow: 3,
//           borderRadius: "8px",
//         }}
//       >
//         <CardHeader
//           title={
//             <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
//               {recipe.name}
//             </Typography>
//           }
//           subheader={
//             <Typography variant="subtitle1" color="textSecondary">
//               Cuisine: {recipe.cuisine} | Difficulty: {recipe.difficulty} |{" "}
//               Calories: {recipe.caloriesPerServing} kcal
//             </Typography>
//           }
//         />
//         <CardContent>
//           <Typography
//             variant="h6"
//             color="textPrimary"
//             sx={{ marginBottom: 2 }}
//           >
//             Ingredients:
//           </Typography>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>
//                 <Typography variant="body1">- {ingredient}</Typography>
//               </li>
//             ))}
//           </ul>

//           <Typography
//             variant="h6"
//             color="textPrimary"
//             sx={{ marginBottom: 2, marginTop: 2 }}
//           >
//             Instructions:
//           </Typography>
//           <ol>
//             {recipe.instructions.map((instruction, index) => (
//               <li key={index}>
//                 <Typography variant="body1">{instruction}</Typography>
//               </li>
//             ))}
//           </ol>

//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="body2">
//               <strong>Preparation Time:</strong> {recipe.prepTimeMinutes}{" "}
//               minutes
//             </Typography>
//             <Typography variant="body2">
//               <strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes
//             </Typography>
//             <Typography variant="body2">
//               <strong>Servings:</strong> {recipe.servings}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
//               reviews)
//             </Typography>
//           </Box>
//         </CardContent>
//         <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
//           <Link href="/recipes" passHref>
//             <Button variant="contained" color="secondary">
//               Back to Recipes
//             </Button>
//           </Link>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// };

// export default RecipeCard;



import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/lib/fetchData";

export async function generateMetadata({ params }) {
  const recipe = await fetchData(`https://dummyjson.com/recipes/${params.id}`);
  return {
    title: `Recipe: ${recipe.name}`,
    description: `Details of the recipe ${recipe.name}`,
  };
}

const RecipeCard = async ({ params }) => {
  const recipe = await fetchData(`https://dummyjson.com/recipes/${params.id}`);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      padding={2}
    >
      <Card
        sx={{
          bgcolor: "slategray",
          width: "100%",
          maxWidth: "800px",
          margin: "16px auto",
          boxShadow: 3,
          borderRadius: "8px",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
              {recipe.name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="textSecondary">
              Cuisine: {recipe.cuisine} | Difficulty: {recipe.difficulty} |{" "}
              Calories: {recipe.caloriesPerServing} kcal
            </Typography>
          }
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={600}
              height={400}
              style={{ borderRadius: "8px" }}
            />
          </Box>

          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginBottom: 2 }}
          >
            Ingredients:
          </Typography>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Typography variant="body1">- {ingredient}</Typography>
              </li>
            ))}
          </ul>

          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginBottom: 2, marginTop: 2 }}
          >
            Instructions:
          </Typography>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>
                <Typography variant="body1">{instruction}</Typography>
              </li>
            ))}
          </ol>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant="body2">
              <strong>Preparation Time:</strong> {recipe.prepTimeMinutes}{" "}
              minutes
            </Typography>
            <Typography variant="body2">
              <strong>Cooking Time:</strong> {recipe.cookTimeMinutes} minutes
            </Typography>
            <Typography variant="body2">
              <strong>Servings:</strong> {recipe.servings}
            </Typography>
            <Typography variant="body2">
              <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
              reviews)
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
          <Link href="/recipes" passHref>
            <Button variant="contained" color="secondary">
              Back to Recipes
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RecipeCard;
