

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      color="text.primary"
    >
      <Typography variant="h1" fontWeight="bold" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Typography variant="body1" textAlign="center" mb={3}>
        It might have been moved or deleted. Check the URL or head back home.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
