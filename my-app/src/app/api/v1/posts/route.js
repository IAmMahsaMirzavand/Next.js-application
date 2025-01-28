export async function GET(req) {
  try {
    
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts'); 
    }

   
    const data = await response.json();

    
    return new Response(JSON.stringify({ posts: data.posts }), {
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
    
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch existing posts');
    }

   
    const data = await response.json();
    const existingPosts = data.posts;

   
    const body = await req.json();

    
    const newPost = { ...body, id: existingPosts.length + 1 };

    
    return new Response(JSON.stringify(newPost), {
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





