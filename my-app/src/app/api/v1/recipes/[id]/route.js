export async function GET(req, { params }) {
    try {
      const { id } = params;
  
    
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      const recipe = data.recipes.find((p) => p.id === parseInt(id));
  
      if (!recipe) {
        return new Response(JSON.stringify({ message: "recipe Not Found!" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(JSON.stringify(recipe), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ message: error.message || "Internal Server Error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  
  export async function PATCH(req, { params }) {
    try {
      const { id } = params;
      const body = await req.json();
  
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      const recipeIndex = data.recipes.findIndex((p) => p.id === parseInt(id));
  
      if (recipeIndex === -1) {
        return new Response(JSON.stringify({ message: "recipe Not Found!" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const updatedrecipe = { ...data.recipes[recipeIndex], ...body };
  
      return new Response(JSON.stringify(updatedrecipe), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ message: error.message || "Internal Server Error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  
  // export async function PATCH(req, { params }) {
  //   try {
  //     const { id } = params;
  //     const body = await req.json();
  
  //     const response = await fetch(`https://dummyjson.com/recipes/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to update post");
  //     }
  
  //     const updatedRecipes = await response.json();
  
  //     return new Response(JSON.stringify(updatedRecipes), {
  //       status: 200,
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } catch (error) {
  //     return new Response(
  //       JSON.stringify({ message: error.message || "Internal Server Error" }),
  //       {
  //         status: 500,
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //   }
  // }





  export async function DELETE(req, { params }) {
    try {
      const { id } = params;
  
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      const recipeIndex = data.recipes.findIndex((p) => p.id === parseInt(id));
  
      if (recipeIndex === -1) {
        return new Response(JSON.stringify({ message: "recipe Not Found!" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(
        JSON.stringify({ message: "recipe deleted successfully!" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ message: error.message || "Internal Server Error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  


