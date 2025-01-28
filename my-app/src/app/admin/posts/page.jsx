// import CardComponent from "@/components/CardComponent";
// import FormPost from "@/components/FormPost";
// import { getData } from "@/utils/actions";
// import dynamic from "next/dynamic";
// import React from "react";

// export default async function AdminPost() {
//   const data = await getData("http://localhost:3000/api/v1/posts", "posts");
//   // console.log(data);
//   const CardComponent = dynamic(() => import("@/components/CardComponent"), {
//     loading: () => (
//       <button type="button" className="bg-black text-white" disabled>
//         <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
//         Processing...
//       </button>
//     ),
//   });

//   return (
//     <div>
//       {" "}
//       <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Admin Posts</h1>
//       <div className="m-5">
//         <FormPost />
//       </div>
//       <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
//         {data?.map((obj) => {
      
      
//         })}
//       </div>
//     </div>
//   );
// }



import React from "react";
import dynamic from "next/dynamic";
import { getData } from "@/utils/actions";
import FormPost from "@/components/FormPost";
import { Typography, Box, Grid, CircularProgress } from "@mui/material";

export default async function AdminPost() {
  const data = await getData("http://localhost:3000/api/v1/posts", "posts");

  const CardComponent = dynamic(() => import("@/components/CardComponent"), {
    loading: () => (
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <CircularProgress size={24} sx={{ marginRight: 2 }} />
        <Typography>Loading...</Typography>
      </Box>
    ),
  });

  return (
    <Box sx={{ padding: 2 }}>
      {/* عنوان صفحه */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          backgroundColor: "lightgray",
          borderRadius: "8px",
          padding: "16px",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Admin Posts
      </Typography>

      {/* فرم پست */}
      <Box sx={{ marginBottom: 4 }}>
        <FormPost />
      </Box>

      {/* نمایش لیست پست‌ها */}
      <Grid container spacing={2} justifyContent="center">
        {data?.map((obj) => (
          <Grid item key={obj._id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent obj={obj} type={"posts"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
