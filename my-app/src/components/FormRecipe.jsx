"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { patchData, postData } from "@/utils/actions";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  image: z.string().url().optional(),
  ingredients: z
    .array(z.string())
    .min(1, "At least one ingredient is required."),
  instructions: z
    .string()
    .min(10, "instruction must be at least 10 characters."),
  cuisine: z.string().min(2, "Cuisine must be specified."),
  calories: z.number().int().positive("Calories must be a positive integer."),
  body: z.string().optional(),
});

const FormRecipe = ({ recipe }) => {
  // console.log(recipe);

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
      // console.log(formObj);
      await patchData(`http://localhost:3000/api/v1/recipes/${recipe._id}`, formObj,"recipes");
    } else {
      await postData("http://localhost:3000/api/v1/recipes", values, "recipes");
    }
  };

  return (
    <div className=" flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full max-w-xl"
        >
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter recipe name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter ingredients (comma-separated)"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value
                          .split(",")
                          .map((item) => item.trim());
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instruction</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter instruction"
                      {...field}
                      // onChange={(e) => {
                      //   const value = e.target.value
                      //     .split(",")
                      //     .map((item) => item.trim());
                      //   field.onChange(value);
                      // }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="cuisine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cuisine</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter cuisine type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter number of calories"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormRecipe;
