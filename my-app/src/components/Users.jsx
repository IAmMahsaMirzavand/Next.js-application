// "use server";
// import React from "react";

// import dynamic from "next/dynamic";
// import { getData } from "@/utils/actions";

// const Users = async () => {
//   const data = await getData("http://localhost:3000/api/v1/users", "users");

//   const CardComponent = dynamic(() => import("./CardComponent"), {
//     loading: () => (
//       <button type="button" className="bg-black text-white" disabled>
//         <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
//         Processing...
//       </button>
//     ),
//   });

//   return (
//     <>
//       <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Users</h1>
//       <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
//         {data?.map((obj) => {
//           return <CardComponent key={obj._id} obj={obj} type={"users"} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default Users;



"use server";
import React from "react";
import dynamic from "next/dynamic";
import { getData } from "@/utils/actions";
import { Typography, Box, Grid, CircularProgress } from "@mui/material";

const Users = async () => {
  const data = await getData("http://localhost:3000/api/v1/users", "users");

  const CardComponent = dynamic(() => import("./CardComponent"), {
    loading: () => (
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <CircularProgress size={24} sx={{ marginRight: 2 }} />
        <Typography>Processing...</Typography>
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
        Users
      </Typography>

      {/* نمایش لیست کاربران */}
      <Grid container spacing={2} justifyContent="center">
        {data?.map((obj) => (
          <Grid item key={obj._id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent obj={obj} type={"users"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Users;
