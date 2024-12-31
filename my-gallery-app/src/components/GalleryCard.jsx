import React from "react";
import Image from "next/image";
import { Card, CardMedia } from "@mui/material";

const GalleryCard = ({ photo }) => {
  return (
    <Card sx={{ borderRadius: 2, overflow: "hidden", maxWidth: 350 }}>
      <CardMedia>
        <Image
          src={photo.src}
          alt={photo.alt || "Photo"}
          width={350}
          height={350}
          style={{ objectFit: "cover" }}
        />
      </CardMedia>
    </Card>
  );
};

export default GalleryCard;
