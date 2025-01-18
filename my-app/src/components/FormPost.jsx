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
  title: z.string().min(2, "Title must be at least 2 characters"),
  body: z.string().min(2, "Body must be at least 2 characters"),
});

const FormPost = ({ post }) => {
  console.log(post);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
    },
  });

  const onSubmit = async (values) => {
    if (post) {
      //   console.log(values);
      const formObj = { ...values, _id: post._id };
      await patchData(`http://localhost:3000/api/v1/posts/${post._id}`, formObj, "posts");
    } else {
      // console.log("valuesss", values);

      // const formObj = { ...values, id: uuidv4() };
     await postData("http://localhost:3000/api/v1/posts", values, "posts");
    }
  };

  return (
    <div className=" flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full max-w-lg"
        >
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="hello..." {...field} />
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

export default FormPost;
