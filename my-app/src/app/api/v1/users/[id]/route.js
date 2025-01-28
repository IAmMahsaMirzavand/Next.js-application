export async function GET(req, { params }) {
    try {
      const { id } = params;
  
    
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      const user = data.users.find((p) => p.id === parseInt(id));
  
      if (!user) {
        return new Response(JSON.stringify({ message: "user Not Found!" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(JSON.stringify(user), {
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
  
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
  
      const updatedUser = await response.json();
  
      return new Response(JSON.stringify(updatedUser), {
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

  


  export async function DELETE(req, { params }) {
    try {
      const { id } = params;
  
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
  
      return new Response(
        JSON.stringify({ message: "User deleted successfully!" }),
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
  