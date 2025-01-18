import React from "react";
import CardComponent from "./CardComponent";
import dynamic from "next/dynamic";
import { getData } from "@/utils/actions";

const Posts = async () => {
  const data = await getData("http://localhost:3000/api/v1/posts", "posts");
// console.log(data);


  const CardComponent = dynamic(() => import("./CardComponent"), {
    loading: () => (
      <button type="button" className="bg-black text-white" disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3"
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    ),
  });

  return (
    <>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Posts</h1>
      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data?.map((obj) => {
          return <CardComponent key={obj._id} obj={obj} type={"posts"} />;
        })}
      </div>
    </>
  );
};

export default Posts;
