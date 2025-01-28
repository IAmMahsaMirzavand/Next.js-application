// "use client";
// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import { Card, CardContent, CardActions, CardHeader, Typography, Button, CircularProgress, Box } from "@mui/material";
// import Loading from "@/app/loading";
// import Link from "next/link";
// // import { Box } from "lucide-react";

// const PostDetails = ({ params }) => {
//   const { id } = params;
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch post");
//         }
//         const data = await response.json();
//         setPost(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <Box
//       sx={{ 
//         display:"flex",
//       justifyContent:"center",
//       alignItems:"center",
//       height:"100vh",
//       bgcolor:"background.default",
//     }}
       
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       {/* <Head>
//         <title>{post.title}</title>
//       </Head> */}
     
// <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", padding: "16px" }}>
//       <Card sx={{ bgcolor: "slategray", width: "100%", maxWidth: "600px", margin: "16px auto" }}>
//         <CardHeader
//           title={<Typography variant="h5" color="primary">{post.title}</Typography>}
//           sx={{ bgcolor: "slategray", paddingBottom: 0 }}
//         />
//         <CardContent>
//           <Typography variant="body1" >
//             {post.body}
//           </Typography>
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Typography variant="body2">
//                 <strong>Likes:</strong> {post.reactions?.likes}
//               </Typography>
//             </li>
//             <li>
//               <Typography variant="body2">
//                 <strong>Dislikes:</strong> {post.reactions?.dislikes}
//               </Typography>
//             </li>
//             <li>
//               <Typography variant="body2">
//                 <strong>Views:</strong> {post.views}
//               </Typography>
//             </li>
//           </ul>
//         </CardContent>
//         <CardActions>
//           <Link href="/posts" passHref>
//             <Button variant="contained" color="primary">
//               Back
//             </Button>
//           </Link>
//         </CardActions>
//       </Card>
//     </div>
//     </>
//   );
// };

// export default PostDetails;



import React from "react";
import { Card, CardContent, CardActions, CardHeader, Typography, Button } from "@mui/material";
import Link from "next/link";
import { getData } from "@/utils/actions";



export async function generateMetadata({ params }) {
  const  post  = await getData(`http://localhost:3000/api/v1/posts/${params.id}`);
  return {
    title: `post: ${post.title}`,
    description: `Details of post ${post.title}`,
  };
}

const PostCard = async ({ params }) => {
  const post = await getData(`http://localhost:3000/api/v1/posts/${params.id}`);
  console.log(post);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", padding: "16px" }}>
      <Card sx={{ bgcolor: "slategray", width: "100%", maxWidth: "600px", margin: "16px auto" }}>
        <CardHeader
          title={<Typography variant="h5" color="primary">{post.title}</Typography>}
          sx={{ bgcolor: "slategray", paddingBottom: 0 }}
        />
        <CardContent>
          <Typography variant="body1" >
            {post.body}
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Typography variant="body2">
                <strong>Likes:</strong> {post.reactions?.likes}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Dislikes:</strong> {post.reactions?.dislikes}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Views:</strong> {post.views}
              </Typography>
            </li>
          </ul>
        </CardContent>
        <CardActions>
          <Link href="/posts" passHref>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;