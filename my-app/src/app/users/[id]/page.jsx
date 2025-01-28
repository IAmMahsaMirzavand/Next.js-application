// "use client";

// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Typography, Card, CardContent, Button } from "@mui/material";
// import Head from "next/head";


// export default function UserDetail({ params }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/api/v1/users/${params.id}`);
//         if (!res.ok) throw new Error("Failed to fetch user details");
//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [params.id]);

 

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100vh"
//         bgcolor="background.default"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100vh"
//         bgcolor="background.default"
//         padding={4}
//       >
//         <Typography variant="h6" color="error">
//           Error: {error}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <>

// {/* <Head>
//         <title>{user ? `${user.firstName} ${user.lastName}` : "User Detail"}</title>
//       </Head> */}

//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//       bgcolor="background.default"
//       padding={4}
//     >
//       <Card
//         sx={{
//           maxWidth: 600,
//           width: "100%",
//           bgcolor: "slategray",
//           color: "white",
//           padding: 2,
//         }}
//       >
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {user.firstName} {user.lastName}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Email:</strong> {user.email}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Age:</strong> {user.age}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Gender:</strong> {user.gender}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Birth date:</strong> {user.birthDate}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Address:</strong> {`${user.address.country}, ${user.address.state}, ${user.address.city}, ${user.address.address}`}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Role:</strong> {user.role}
//           </Typography>
//           <Typography variant="body2">
//             <strong>University:</strong> {user.university}
//           </Typography>
//         </CardContent>
//         <Box textAlign="center" marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             href="/users"
//             sx={{ textTransform: "none" }}
//           >
//             Back
//           </Button>
//         </Box>
//       </Card>
//     </Box>
//     </>
//   );
// }




import { getData } from "@/utils/actions";
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const user = await getData(`http://localhost:3000/api/v1/users/${params.id}`);
  return {
    title: `User: ${user.firstName}`,
    description: `Details of the user ${user.firstName}`,
  };
}


const UserCard = async ({ params }) => {
  const user = await getData(`http://localhost:3000/api/v1/users/${params.id}`);
  const address = `${user.address.country} ${user.address.state} ${user.address.city} ${user.address.address}`;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      padding={4}
    >
      <Card
        sx={{
          bgcolor: "slategray",
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          padding: 2,
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" component="div">
              {user.firstName} {user.lastName}
            </Typography>
          }
        />
        <CardContent>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Typography variant="body2">
                <strong>Email:</strong> {user.email}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Age:</strong> {user.age}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Gender:</strong> {user.gender}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Birth date:</strong> {user.birthDate}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Address:</strong> {address}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Role:</strong> {user.role}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>University:</strong> {user.university}
              </Typography>
            </li>
          </ul>
        </CardContent>
        <CardActions>
          <Link href="/users" passHref>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default UserCard;
