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
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email"),
  age: z.number().int().positive("Age must be a positive integer"),
  gender: z.enum(["male", "female", "non-binary"], "Please select a gender"),
  birthDate: z.string(),
  // .date()
  // .refine((date) => date < new Date(), "Birth date must be in the past"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  role: z.enum(["admin", "user"], "Please select a role"),
  university: z.string().optional(),
  // image: z.string().optional(),
});

const FormUser = ({ user }) => {
  // console.log(user);
  // const birthDate = user?.birthDate.toLocaleDateString()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      age: user?.age || null,
      gender: user?.gender || "",
      birthDate:
      user?.birthDate
      ? new Date(user.birthDate).toISOString().split("T")[0] 
      : "2000-01-01", 
      address: user?.address || "",
      role: user?.role || "user",
      university: user?.university || "",
    },
  });

  const onSubmit = async (values) => {
    // console.log("Form Values:", values);
    if (user) {
      // console.log("useeeeee");
      // console.log(values);
      const formObj = { ...values, _id: user._id };
      await patchData(
        `http://localhost:3000/api/v1/users/${user._id}`,
        formObj,
        "users"
      );
    } else {
      // const formObj = { ...values, id: uuidv4() };
      await postData("http://localhost:3000/api/v1/users", values, "users");
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
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Age Field */}
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="18"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input placeholder="choose gender" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row gap-5">
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth date</FormLabel>
                  <FormControl>
                    <Input className=" md:w-48" type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University</FormLabel>
                  <FormControl>
                    <Input placeholder="university" {...field} />
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

export default FormUser;
