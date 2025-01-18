import { connectDB, disconnectDB } from "@/db/connectDB";
import User from "@/db/models/User";
import { data } from "@/utils/data";
import { revalidateTag } from "next/cache";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return new Response("User ID is required", { status: 400 });
    }

    await connectDB();

    const user = await User.findById(id);

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    disconnectDB();
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return new Response("user not found", { status: 404 });
    }
      // revalidateTag("users");
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
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
    const updatedUser = await User.findByIdAndUpdate({_id:id}, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return new Response("user not found", { status: 404 });
    }
    // revalidateTag("users");
    return new Response(JSON.stringify(updatedUser), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error patching user:", error);
  } finally {
    disconnectDB();
  }
}


