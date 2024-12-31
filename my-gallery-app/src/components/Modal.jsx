"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Dialog as MuiDialog, DialogContent, Slide } from "@mui/material";

export default function Modal({ children }) {
  const router = useRouter();

  
  const handleClose = () => router.back();

  return (
    <MuiDialog
      open={true}
      onClose={handleClose}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up" }}
      PaperProps={{
        sx: {
          borderRadius: 4, 
          overflow: "hidden", 
        },
      }}
      fullWidth
      maxWidth="sm" 
    >
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
}



