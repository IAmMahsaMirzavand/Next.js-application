
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Home page",
  description: "about users and their posts and recipes",
};

const page = () => {
  const linkArr = ["users", "posts", "recipes"];

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className=" flex flex-col justify-between items-center w-screen  p-10 h-[60vh]">
        {linkArr.map((el, i) => (
          <Link href={`/${el}`} key={i}>
            <h1
             
              className="text-xl m-2 bg-slate-400 rounded p-3 w-[90vw] text-center"
            >
              {el}
            </h1>
          </Link>
        ))}

        
      </div>
    </div>
  );
};

export default page;
