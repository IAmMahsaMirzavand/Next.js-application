import { Box, CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";


const PostsList = dynamic(() => import("@/components/PostsList"), {
  loading: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        bgcolor: "background.default",
      }}
    >
      <CircularProgress />
    </Box>
  ),
  ssr: false,
});

export const metadata = {
  title: "Posts",
  description: "about posts",
};


export default function PostsPage() {
  return (
    <div>
      <div>
        <PostsList />
      </div>
    </div>
  );
}
