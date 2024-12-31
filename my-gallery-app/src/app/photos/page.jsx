import React from "react";
import Image from "next/image";
import images from "../../../public/photos";
import Link from "next/link";
import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";

const Page = () => {
  return (
    <Container sx={{ py: 5 }}>
      
      <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: "3rem", fontWeight: "bold" }}>
        Images
      </Typography>

      
      <Box display="flex" justifyContent="center">
        <Grid container spacing={3} sx={{ padding: 2 }}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Link href={`/photos/${image.id}`} passHref>
                <Card sx={{ borderRadius: 2, overflow: "hidden", maxWidth: 350 , transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        height={300}
                        width={300}
                        style={{ objectFit: "cover", width: "100%", height: "300px" }}
                      />
                     
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Page;






// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import images from "../../../public/photos";
// import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
// import Modal from "../../components/Modal"; 

// const Page = () => {
//   const [selectedImage, setSelectedImage] = useState(null); // ذخیره عکس انتخاب شده

//   const handleOpen = (image) => {
//     setSelectedImage(image); // تنظیم عکس انتخاب شده
//   };

//   const handleClose = () => {
//     setSelectedImage(null); // بستن Modal
//   };

//   return (
//     <Container sx={{ py: 5 }}>
//       <Typography
//         variant="h1"
//         align="center"
//         gutterBottom
//         sx={{ fontSize: "3rem", fontWeight: "bold" }}
//       >
//         Images
//       </Typography>

//       <Box display="flex" justifyContent="center">
//         <Grid container spacing={3} sx={{ padding: 2 }}>
//           {images.map((image) => (
//             <Grid item xs={12} sm={6} md={4} key={image.id}>
//               <Card
//                 sx={{
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   transition: "transform 0.3s",
//                   "&:hover": { transform: "scale(1.05)" },
//                 }}
//               >
//                 <CardActionArea onClick={() => handleOpen(image)}>
//                   <CardMedia>
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       height={300}
//                       width={300}
//                       style={{
//                         objectFit: "cover",
//                         width: "100%",
//                         height: "300px",
//                       }}
//                     />
//                   </CardMedia>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* نمایش Modal در صورت انتخاب عکس */}
//       {selectedImage && (
//         <Modal>
//           <Box sx={{ textAlign: "center" }}>
//             <Typography variant="h6" gutterBottom>
//               ID: {selectedImage.id}
//             </Typography>
//             <Image
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               height={600}
//               width={600}
//               style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//             />
//           </Box>
//         </Modal>
//       )}
//     </Container>
//   );
// };

// export default Page;
