import FormUser from "@/components/FormUser";
import { Button } from "@/components/ui/button";
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
import { getData } from "@/utils/actions";
// import getData from "@/utils/actions";
import Link from "next/link";
import React from "react";

const userCard = async ({ params }) => {
  const user = await getData(
    `http://localhost:3000/api/v1/users/${params.id}`,
    "users"
  );
  // const [user] = data;

  const adress = user?.address;

  return (
    <div className="flex justify-center items-center  h-[90vh] p-4">
      <Card className="bg-slate-200 w-full max-w-lg mx-auto my-10 h-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <h2 className="text-xl md:text-2xl">{user?.name}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <span>Email:</span> {user?.email}
            </li>
            <li>
              <span>Age:</span> {user?.age}
            </li>
            <li>
              <span>Gender:</span> {user?.gender}
            </li>
            <li>
              <span>Birth date:</span> {user?.birthDate&& new Date(user.birthDate).toLocaleDateString()}
            </li>
            <li>
              <span>Address:</span> {adress}
            </li>
            <li>
              <span>Role:</span> {user?.role}
            </li>
            <li>
              <span>University:</span> {user?.university}
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Link href="/users">
            <Button>Back</Button>
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
              <FormUser user={user} />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default userCard;
