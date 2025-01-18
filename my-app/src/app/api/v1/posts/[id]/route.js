import { connectDB, disconnectDB } from "@/db/connectDB";
import Post from "@/db/models/Post";
import { data } from "@/utils/data";
import { revalidateTag } from "next/cache";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return new Response("Post ID is required", { status: 400 });
    }

    await connectDB();

    const post = await Post.findById(id);

    if (!post) {
      return new Response("post not found", { status: 404 });
    }

    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    disconnectDB();
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return new Response("post not found", { status: 404 });
    }
   
    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    await connectDB();
    const updatedPost = await Post.findByIdAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      return new Response("post not found", { status: 404 });
    }
    // revalidateTag("users");
    return new Response(JSON.stringify(updatedPost), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error patching post:", error);
  } finally {
    disconnectDB();
  }
}
