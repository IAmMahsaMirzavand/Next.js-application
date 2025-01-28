// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import React from "react";

// const Modal = () => {
//   return (
//     <Dialog>
//       <DialogTrigger>Open</DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Are you absolutely sure?</DialogTitle>
//           <DialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Modal;


import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* دکمه برای باز کردن دیالوگ */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open
      </Button>

      {/* دیالوگ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log("Action confirmed");
              handleClose();
            }}
            color="error"
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
