import FormPost from "@/components/FormPost";
import Posts from "@/components/Posts";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "about posts ",
};

const page = () => {
  return (
    <div className=" p-10">
      <FormPost/>
      <Posts />
    </div>
  );
};

export default page;
