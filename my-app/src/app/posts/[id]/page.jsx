import React from "react";
import { Card, CardContent, CardActions, CardHeader, Typography, Button } from "@mui/material";
import Link from "next/link";

import { fetchData } from "@/lib/fetchData";

export async function generateMetadata({ params }) {
  const  post  = await fetchData(`https://dummyjson.com/posts/${params.id}`);
  return {
    title: `post: ${post.title}`,
    description: `Details of post ${post.title}`,
  };
}

const PostCard = async ({ params }) => {
  const post = await fetchData(`https://dummyjson.com/posts/${params.id}`);
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
