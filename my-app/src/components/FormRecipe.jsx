// "use client";

// import React from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { patchData, postData } from "@/utils/actions";
// import { v4 as uuidv4 } from "uuid";

// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters."),
//   image: z.string().url().optional(),
//   ingredients: z
//     .array(z.string())
//     .min(1, "At least one ingredient is required."),
//   instructions: z
//     .string()
//     .min(10, "instruction must be at least 10 characters."),
//   cuisine: z.string().min(2, "Cuisine must be specified."),
//   calories: z.number().int().positive("Calories must be a positive integer."),
//   body: z.string().optional(),
// });

// const FormRecipe = ({ recipe }) => {
//   // console.log(recipe);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: recipe?.name || "",
//       image: recipe?.image || "",
//       ingredients: recipe?.ingredients || [""],
//       instructions: recipe?.instructions || "",
//       cuisine: recipe?.cuisine || "",
//       calories: recipe?.calories || null,
//     },
//   });

//   const onSubmit = async (values) => {
//     if (recipe) {
        
//       const formObj = { ...values, _id: recipe._id };
//       // console.log(formObj);
//       await patchData(`http://localhost:3000/api/v1/recipes/${recipe._id}`, formObj,"recipes");
//     } else {
//       await postData("http://localhost:3000/api/v1/recipes", values, "recipes");
//     }
//   };

//   return (
//     <div className=" flex justify-center">
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-8 w-full max-w-xl"
//         >
//           <div className="flex flex-row gap-2">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter recipe name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="image"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Image URL</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter image URL" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="flex flex-row gap-2">
//             <FormField
//               control={form.control}
//               name="ingredients"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Ingredients</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter ingredients (comma-separated)"
//                       {...field}
//                       onChange={(e) => {
//                         const value = e.target.value
//                           .split(",")
//                           .map((item) => item.trim());
//                         field.onChange(value);
//                       }}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="instructions"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Instruction</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter instruction"
//                       {...field}
//                       // onChange={(e) => {
//                       //   const value = e.target.value
//                       //     .split(",")
//                       //     .map((item) => item.trim());
//                       //   field.onChange(value);
//                       // }}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="flex flex-row gap-2">
//             <FormField
//               control={form.control}
//               name="cuisine"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Cuisine</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter cuisine type" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="calories"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Calories</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       placeholder="Enter number of calories"
//                       {...field}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <Button type="submit" className="w-full md:w-auto">
//             Submit
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default FormRecipe;



"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Grid } from "@mui/material";
import { postData, patchData } from "@/utils/actions";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  image: z.string().url().optional(),
  ingredients: z
    .array(z.string())
    .min(1, "At least one ingredient is required."),
  instructions: z
    .string()
    .min(10, "Instruction must be at least 10 characters."),
  cuisine: z.string().min(2, "Cuisine must be specified."),
  calories: z.number().int().positive("Calories must be a positive integer."),
  body: z.string().optional(),
});

const FormRecipe = ({ recipe }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: recipe?.name || "",
      image: recipe?.image || "",
      ingredients: recipe?.ingredients || [""],
      instructions: recipe?.instructions || "",
      cuisine: recipe?.cuisine || "",
      calories: recipe?.calories || null,
    },
  });

  const onSubmit = async (values) => {
    if (recipe) {
      const formObj = { ...values, _id: recipe._id };
      await patchData(`http://localhost:3000/api/v1/recipes/${recipe._id}`, formObj, "recipes");
    } else {
      await postData("http://localhost:3000/api/v1/recipes", values, "recipes");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: "100%", maxWidth: "600px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Recipe Name"
              fullWidth
              {...form.register("name")}
              error={!!form.formState.errors.name}
              helperText={form.formState.errors.name?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Image URL"
              fullWidth
              {...form.register("image")}
              error={!!form.formState.errors.image}
              helperText={form.formState.errors.image?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Ingredients (comma separated)"
              fullWidth
              {...form.register("ingredients")}
              error={!!form.formState.errors.ingredients}
              helperText={form.formState.errors.ingredients?.message}
              onChange={(e) => {
                const value = e.target.value.split(",").map((item) => item.trim());
                form.setValue("ingredients", value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Instructions"
              fullWidth
              multiline
              rows={4}
              {...form.register("instructions")}
              error={!!form.formState.errors.instructions}
              helperText={form.formState.errors.instructions?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Cuisine"
              fullWidth
              {...form.register("cuisine")}
              error={!!form.formState.errors.cuisine}
              helperText={form.formState.errors.cuisine?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Calories"
              type="number"
              fullWidth
              {...form.register("calories")}
              error={!!form.formState.errors.calories}
              helperText={form.formState.errors.calories?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormRecipe;
