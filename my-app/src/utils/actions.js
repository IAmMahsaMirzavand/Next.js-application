"use server";
import { revalidateTag } from "next/cache";

export async function getData(url, tag) {
  const tags =
    tag === "users" ? ["users"] : tag === "posts" ? ["posts"] : ["recipes"];

  const res = await fetch(url, { next: { tags } });
  const data = await res.json();
  return data;
}
export async function postData(url, data, tag) {
  await fetch(url, { method: "POST", body: JSON.stringify(data) });
  const revalidate =
    tag === "users" ? "users" : tag === "posts" ? "posts" : "recipes";
  revalidateTag(revalidate);
}

export async function patchData(url, data, tag) {
  if (!data._id) {
    throw new Error("Data object must have an 'id' property");
  }

  await fetch(url, { method: "PATCH", body: JSON.stringify(data) });
  const revalidate =
    tag === "users" ? "users" : tag === "posts" ? "posts" : "recipes";
  revalidateTag(revalidate);
  return data;
}

export async function deleteData(url, tag) {
  await fetch(url, { method: "DELETE" });
  const revalidate =
    tag === "users" ? "users" : tag === "posts" ? "posts" : "recipes";
  revalidateTag(revalidate);
}
