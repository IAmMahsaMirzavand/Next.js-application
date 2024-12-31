import React from "react";
import images from "../../../../public/photos";
import GalleryCard from "@/components/GalleryCard";
import { Container, Box, Typography, Button } from "@mui/material";

const Page = ({ params }) => {
  const photo = images.find((photo) => photo.id === Number(params.id));

  return (
    <Container sx={{ py: 5 }}>
      
      <Typography variant="h4" align="center" gutterBottom>
        Id: {params.id}
      </Typography>

      
      <Box display="flex" justifyContent="center">
        <GalleryCard photo={photo} />
      </Box>

      
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "8px 16px",
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            },
          }}
        >
          <a href={photo.src} download={`${photo.title || "download"}.jpg`} style={{ textDecoration: "none", color: "inherit" }}>
            Download
          </a>
        </Button>
      </Box>
    </Container>
  );
};

export default Page;
