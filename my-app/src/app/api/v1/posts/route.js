import { connectDB, disconnectDB } from "@/db/connectDB";
import Post from "@/db/models/Post";
import { data } from "@/utils/data";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find();

    return new Response(JSON.stringify(posts), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    // console.log("bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",body);

    await connectDB();
    const post = await Post.create(body);

    // revalidateTag("users");
    return new Response(JSON.stringify(post), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error createing post:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}
