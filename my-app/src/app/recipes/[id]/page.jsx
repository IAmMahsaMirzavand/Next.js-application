import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getData } from "@/utils/actions";
import FormRecipe from "@/components/FormRecipe";

const recipeCard = async ({ params }) => {
  const recipe = await getData(
    `http://localhost:3000/api/v1/recipes/${params.id}`,
    "recipes"
  );
  
  // console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',recipe);

  return (
    <div className="flex justify-center items-center h-[90vh] p-4 my-72 md:my-20 ">
      <Card className="bg-slate-200 w-full max-w-5xl my-4">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h2 className="text-cyan-900 text-2xl">{recipe?.name}</h2>
            <Image
              src={recipe?.image}
              className="rounded-xl"
              width={120}
              height={30}
              alt={recipe?.name}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <h2 className="text-orange-700 text-[18px] font-semibold my-3">
              Ingredients:
            </h2>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <div className="flex">
            <div>
              <h2 className="text-orange-700 text-[18px] font-semibold my-2">
                Instructions:
              </h2>
              <p>{recipe?.instructions}</p>
              {/* {recipe?.[instructions]?.map((instruction, index) => (
                <p key={index}>{instruction}</p>
              ))} */}
            </div>
            <div className="flex items-center justify-center  ml-24 -mt-72">
              <ul>
                <li>
                  <span>Cuisine:</span> {recipe?.cuisine}
                </li>
                <li>
                  <span>Calories:</span> {recipe?.calories}
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href={"/recipes"}>
            <Button className="me-6">Back</Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <div className="bg-black py-[6px] px-5 rounded-[5px] text-white">
                {" "}
                Edit
              </div>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogHeader>
                <DialogTitle>Edit</DialogTitle>
              </DialogHeader>
              <FormRecipe recipe={recipe} />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default recipeCard;
