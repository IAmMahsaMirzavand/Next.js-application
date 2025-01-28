"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { deleteData } from "@/utils/actions";
import { revalidateTag } from "next/cache";

const CardComponent = ({ obj, type }) => {
  // console.log("objjjjjjj", obj);

  const router = useRouter();
  const cardName = obj.name || obj.title || obj.firstName + " " + obj.lastName;
  const description = obj.email;
  const rating = obj.rating;
  const views = obj.views;

  const handleClick = async (e) => {
    const action = e.target.innerText;
    if (action === "Delete") {
      await deleteData(`http://localhost:3000/api/v1/${type}/${obj._id}`, type);
      // revalidateTag(type);
    } else if (action === "Edit") {
      console.log("edit");
    } else {
      router.push(`/${type}/${obj._id}`);
    }

    //
  };
  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center ">
            {obj.image && (
              <Image
                src={obj.image}
                width={100}
                className="rounded hover:scale-150"
                height={30}
                alt="card image"
              />
            )}
            <h2 className="ml-2">{cardName}</h2>
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          {rating && <p>rating: {rating}</p>}
          {views && <p>views: {views}</p>}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={handleClick}>More</Button>
          <Button onClick={handleClick}>Delete</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
