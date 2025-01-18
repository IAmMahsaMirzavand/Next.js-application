export const data = {
  users: [
    {
      id: "1",
      // image:
      //   "https://dummyjson.com/icon/emilys/128",
      name: "John Doe",
      email: "john.doe@example.com",
      age: 25,
      gender: "male",
      birthDate: "1998-03-15",
      address: "123 Main St, Springfield, USA",
      role: "student",
      university: "Springfield University",
    },
    {
      id: "2",
      // image:
      //   "https://dummyjson.com/icon/michaelw/128",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 28,
      gender: "female",
      birthDate: "1995-07-22",
      address: "456 Elm St, Metropolis, USA",
      role: "professor",
      university: "Metropolis University",
    },
  ],
  posts: [
    {
      id: "1",
      title: "Understanding NestJS Basics",
      body: "NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.",
      likes: 120,
      dislikes: 10,
      views: 1500,
    },
    {
      id: "2",
      title: "Advanced TypeScript Tips",
      body: "Master TypeScript with these advanced tips and tricks.",
      likes: 200,
      dislikes: 15,
      views: 3000,
    },
  ],
  recipes: [
    {
      id: "1",
      name: "Spaghetti Carbonara",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.8,
      views: 5000,
      ingredients: ["spaghetti", "eggs", "parmesan cheese", "bacon", "pepper"],
      instruction:
        "Boil the spaghetti. In a separate bowl, mix eggs and cheese. Fry the bacon, then combine everything with the spaghetti.",
      Cuisine: "Italian",
      calories: 600,
    },
    {
      id: "2",
      name: "Chicken Tikka Masala",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.9,
      views: 7000,
      ingredients: ["chicken", "yogurt", "spices", "tomatoes", "cream"],
      instruction:
        "Marinate chicken in yogurt and spices. Cook the chicken, then simmer in a spiced tomato and cream sauce.",
      Cuisine: "Indian",
      calories: 450,
    },
  ],
  admin: {
    users: [
      {
        id: "a1",
        // image:
        //   "https://dummyjson.com/icon/emilys/128",
        name: "admin1",
        email: "admin1@example.com",
        age: 19,
        gender: "male",
        birthDate: "1998-03-15",
        address: "123 Main St, Springfield, USA",
        role: "admin",
        university: "Springfield University",
      },
    ],
    posts: [
      {
        id: "a1",
        title: "Understanding nextjs",
        body: "NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.",
        likes: 120,
        dislikes: 10,
        views: 1500,
      },
    ],
    recipes: [  {
      id: "a1",
      name: "Carbonara",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.8,
      views: 5000,
      ingredients: ["spaghetti", "eggs", "parmesan cheese", "bacon", "pepper"],
      instruction:
        "Boil the spaghetti. In a separate bowl, mix eggs and cheese. Fry the bacon, then combine everything with the spaghetti.",
      Cuisine: "Italian",
      calories: 500,
    },],
  },
};
