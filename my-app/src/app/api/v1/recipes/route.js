export async function GET(req) {
    try {
      
      const response = await fetch('https://dummyjson.com/recipes');
      if (!response.ok) {
        throw new Error('Failed to fetch recipes'); 
      }
  
     
      const data = await response.json();
  
      
      return new Response(JSON.stringify({ recipes: data.recipes }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
  
  export async function POST(req) {
    try {
      
      const response = await fetch('https://dummyjson.com/recipes');
      if (!response.ok) {
        throw new Error('Failed to fetch existing recipes');
      }
  
     
      const data = await response.json();
      const existingrecipes = data.recipes;
  
     
      const body = await req.json();
  
      
      const newRecipe = { ...body, id: existingrecipes.length + 1 };
  
      
      return new Response(JSON.stringify(newRecipe), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      
      return new Response(
        JSON.stringify({ message: error.message || "Invalid request" }),
        {
          status: error.message === "Invalid request body" ? 400 : 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  
  