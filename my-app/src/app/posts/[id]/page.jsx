import FormPost from "@/components/FormPost";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { getData } from "@/utils/actions";
// import getData from "@/utils/actions";
import Link from "next/link";
import React from "react";

const postCard = async ({ params }) => {
const post = await getData(`http://localhost:3000/api/v1/posts/${params.id}`,"posts");
  // const [post] = data;
  // console.log(post);
  return (
    <div className="flex justify-center items-center h-[90vh] p-4">
      <Card className="bg-slate-200 w-full max-w-3xl my-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <h2 className="text-cyan-900 text-2xl">{post?.title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="my-4">{post?.body}</p>
          <ul>
            <li>
              <span>Likes:</span> {post?.likes}
            </li>
            <li>
              <span>Dislikes:</span> {post?.dislikes}
            </li>
            <li>
              <span>Views:</span> {post?.views}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/posts">
            <Button className='me-3'>Back</Button>
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
              {/* <FormUser user={user} /> */}
              <FormPost post={post}/>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default postCard;
