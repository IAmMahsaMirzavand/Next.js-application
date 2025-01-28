export async function GET(req) {
  try {
    
    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users'); 
    }

   
    const data = await response.json();

    
    return new Response(JSON.stringify({ users: data.users }), {
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
    
    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch existing users');
    }

   
    const data = await response.json();
    const existingusers = data.users;

   
    const body = await req.json();

    
    const newUser = { ...body, id: existingusers.length + 1 };

    
    return new Response(JSON.stringify(newUser), {
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





