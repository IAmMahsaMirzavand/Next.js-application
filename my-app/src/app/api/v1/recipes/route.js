import { connectDB, disconnectDB } from "@/db/connectDB";
import Recipe from "@/db/models/Recipe";
import { data } from "@/utils/data";

export async function GET() {
  try {
    await connectDB();
    const recipes = await Recipe.find();

    return new Response(JSON.stringify(recipes), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

export async function POST(req) {
  try {
    const body = await req.json();


    await connectDB();
    const recipe = await Recipe.create(body);

    return new Response(JSON.stringify(recipe), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error createing recipe:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}