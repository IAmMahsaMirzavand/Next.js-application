// "use client";
// import React, { useEffect, useState } from "react";


// import {
//   Card,
//   CardContent,
//   CardActions,
//   CardHeader,
//   Typography,
//   Button,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import Link from "next/link";
// import Image from "next/image";
// export default function RecipeDetails({ params }) {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/api/v1/recipes/${params.id}`);
//         if (!res.ok) throw new Error("Failed to fetch recipe details");
//         const data = await res.json();
//         setRecipe(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecipe();
//   }, [params.id]);



//   if (loading) {
//     return (
//       <Box
//       sx={{ 
//         display:"flex",
//       justifyContent:"center",
//       alignItems:"center",
//       height:"100vh",
//       bgcolor:"background.default",
//     }}
       
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }
//   if (error)
//     return <div className="text-center py-10 text-red-500">Error: {error}</div>;

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
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: 3,
//             }}
//           >
//             <Image
//               src={recipe.image}
//               alt={recipe.name}
//               width={600}
//               height={400}
//               style={{ borderRadius: "8px" }}
//             />
//           </Box>

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
// }




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

import { getData } from "@/utils/actions";

export async function generateMetadata({ params }) {
  const recipe = await getData(`http://localhost:3000/api/v1/recipes/${params.id}`);
  return {
    title: `Recipe: ${recipe.name}`,
    description: `Details of the recipe ${recipe.name}`,
  };
}

const RecipeCard = async ({ params }) => {
  const recipe = await getData(`http://localhost:3000/api/v1/recipes/${params.id}`);

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