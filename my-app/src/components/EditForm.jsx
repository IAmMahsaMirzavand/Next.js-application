import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function EditForm({ editData, setEditData, onSubmit, onCancel }) {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(); 
      }}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mt: 4 }}
    >
      <Typography variant="h6">Edit User</Typography>
      <TextField
        label="New Name"
        variant="outlined"
        value={editData.firstName}
        onChange={(e) => setEditData((prev) => ({ ...prev, firstName: e.target.value }))}
        required
        
      />

<TextField
        label="New Name"
        variant="outlined"
        value={editData.lastName}
        onChange={(e) => setEditData((prev) => ({ ...prev, lastName: e.target.value }))}
        required
      />
      <TextField
        label="New Email"
        variant="outlined"
        value={editData.email}
        onChange={(e) => setEditData((prev) => ({ ...prev, email: e.target.value }))}
        required
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
        <Button variant="outlined" color="error" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
