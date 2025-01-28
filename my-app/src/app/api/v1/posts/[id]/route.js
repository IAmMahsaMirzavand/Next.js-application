export async function GET(req, { params }) {
    try {
      const { id } = params;
  
    
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      const post = data.posts.find((p) => p.id === parseInt(id));
  
      if (!post) {
        return new Response(JSON.stringify({ message: "Post Not Found!" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(JSON.stringify(post), {
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
  
  //     const response = await fetch("https://dummyjson.com/posts");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch posts");
  //     }
  //     const data = await response.json();
  //     const postIndex = data.posts.findIndex((p) => p.id === parseInt(id));
  
  //     if (postIndex === -1) {
  //       return new Response(JSON.stringify({ message: "Post Not Found!" }), {
  //         status: 404,
  //         headers: { "Content-Type": "application/json" },
  //       });
  //     }
  
  //     const updatedPost = { ...data.posts[postIndex], ...body };
  
  //     return new Response(JSON.stringify(updatedPost), {
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
  
  // export async function DELETE(req, { params }) {
  //   try {
  //     const { id } = params;
  
  //     const response = await fetch("https://dummyjson.com/posts");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch posts");
  //     }
  //     const data = await response.json();
  //     const postIndex = data.posts.findIndex((p) => p.id === parseInt(id));
  
  //     if (postIndex === -1) {
  //       return new Response(JSON.stringify({ message: "Post Not Found!" }), {
  //         status: 404,
  //         headers: { "Content-Type": "application/json" },
  //       });
  //     }
  
  //     return new Response(
  //       JSON.stringify({ message: "Post deleted successfully!" }),
  //       {
  //         status: 200,
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
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
  


  export async function PATCH(req, { params }) {
    try {
      const { id } = params;
      const body = await req.json();
  
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update post");
      }
  
      const updatedPost = await response.json();
  
      return new Response(JSON.stringify(updatedPost), {
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
  
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
  
      return new Response(
        JSON.stringify({ message: "Post deleted successfully!" }),
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
  