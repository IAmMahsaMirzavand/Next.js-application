import CardComponent from "@/components/CardComponent";
// import FormPost from "@/components/FormPost";
import FormRecipe from "@/components/FormRecipe";
import { getData } from "@/utils/actions";
import dynamic from "next/dynamic";
import React from "react";

export default async function AdminRecipe() {
  const data = await getData("http://localhost:3000/api/v1/recipes", [
    "recipes",
  ]);
  const CardComponent = dynamic(() => import("@/components/CardComponent"), {
    loading: () => (
      <button type="button" className="bg-black text-white" disabled>
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    ),
  });
  return (
    <div>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Admin Recipes</h1>
      <div className="m-5">
        <FormRecipe />
      </div>

      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data?.map((obj) => {
          return <CardComponent key={obj.id} obj={obj} type={"recipes"}  />;
        })}
      </div>
    </div>
  );
}
