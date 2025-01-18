import { connectDB, disconnectDB } from "@/db/connectDB";
import Recipe from "@/db/models/Recipe";
import {data} from "@/utils/data";
import { revalidateTag } from "next/cache";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return new Response("recipe ID is required", { status: 400 });
    }

    await connectDB();

    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return new Response("recipe not found", { status: 404 });
    }

    return new Response(JSON.stringify(recipe), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    disconnectDB();
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      return new Response("recipe not found", { status: 404 });
    }
 
    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting recipe:", error);
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
    const updatedRecipe = await Recipe.findByIdAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRecipe) {
      return new Response("recipe not found", { status: 404 });
    }
    
    return new Response(JSON.stringify(updatedRecipe), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error patching recipe:", error);
  } finally {
    disconnectDB();
  }
}


