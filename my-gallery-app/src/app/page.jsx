import Link from "next/link";
import React from "react";
import { Button, Box} from "@mui/material";
// import Image from "next/image";
// import ImageRoute from "./photos/page";

const Page = () => {


  return (

    <>
    <Box display="flex" justifyContent="center" my={5}>
      <Link href="/photos" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          App Gallery
        </Button>
      </Link>
      {/* <ImageRoute /> */}
    </Box>

</>
  );
};

export default Page;





// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
// // import Grid  from "@mui/material/Grid2";
// import images from "../../public/photos";

// const Page = () => {
//   return (
//     <Container sx={{ py: 5 }}>
      
//       <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: "3rem", fontWeight: "bold" }}>
//         Images
//       </Typography>

      
//       <Box display="flex" justifyContent="center">
//         <Grid container spacing={3} sx={{ padding: 2 }}>
//           {images.map((image) => (
//             <Grid item xs={12} sm={6} md={4} key={image.id}>
//               <Link href={'/photos'} passHref>
//                 <Card sx={{ borderRadius: 2, overflow: "hidden", maxWidth: 350 , transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
//                   <CardActionArea>
//                     <CardMedia>
//                       <Image
//                         src={image.src}
//                         alt={image.alt}
//                         height={300}
//                         width={300}
//                         style={{ objectFit: "cover", width: "100%", height: "300px" }}
//                       />
                     
//                     </CardMedia>
//                   </CardActionArea>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Page;
