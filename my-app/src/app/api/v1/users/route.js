import { connectDB, disconnectDB } from "@/db/connectDB";
import User from "@/db/models/User";
import getData from "@/utils/actions";
import { data } from "@/utils/data";
import { revalidateTag } from "next/cache";


// export async function POST(req) {
//   return Response.json(data.users);
// }

export async function GET() {
  try {
    await connectDB();
    const users = await User.find();

    // revalidateTag("users");
    return new Response(JSON.stringify(users), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    // console.log("bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",body);
    
    await connectDB();
    const user = await User.create(body);

    // revalidateTag("users");
    return new Response(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error createing user:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

