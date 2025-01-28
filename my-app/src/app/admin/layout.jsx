import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
     
      <Box
        sx={{
          width: "20%",
          backgroundColor: "#2C3E50",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Admin Panel
        </Typography>
        <Link href={"/admin/posts"} passHref>
          <Button
            
            variant="contained"
            color="primary"
            sx={{ marginBottom: 2, width: "100%" }}
          >
            Posts
          </Button>
        </Link>
        <Link href={"/admin/recipes"} passHref>
          <Button
          
            variant="contained"
            color="primary"
            sx={{ marginBottom: 2, width: "100%" }}
          >
            Recipes
          </Button>
        </Link>
        <Link href={"/admin/users"} passHref>
          <Button
            
            variant="contained"
            color="primary"
            sx={{ marginBottom: 2, width: "100%" }}
          >
            Users
          </Button>
        </Link>
      </Box>

     
      <Box
        sx={{
          width: "80%",
          padding: 4,
          backgroundColor: "#ECF0F1",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
