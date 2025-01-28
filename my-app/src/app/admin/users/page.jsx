"use client"
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { getData, postData, patchData, deleteData } from "@/utils/actions"; 

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);  
  const [currentUserId, setCurrentUserId] = useState(null);

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getData("http://localhost:3000/api/v1/users"); 
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

 
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = await postData("http://localhost:3000/api/v1/users", formData);
      setUsers((prev) => [...prev, newUser]);
      setFormData({ firstName: "", lastName: "", email: "" });
      setSnackbar({ open: true, message: "User added successfully!", severity: "success" });
      setOpenAddModal(false); 
    } catch (error) {
      setError(error.message);
    }
  };


  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await patchData(`http://localhost:3000/api/v1/users/${currentUserId}`, formData); 
      setUsers((prev) => prev.map((user) => (user.id === currentUserId ? updatedUser : user)));
      setSnackbar({ open: true, message: "User updated successfully!", severity: "success" });
      setOpenEditModal(false); 
      setFormData({ firstName: "", lastName: "", email: "" });

    } catch (error) {
      setError(error.message);
    }
  };

 
  const handleDeleteUser = async (id) => {
    try {
      await deleteData(`http://localhost:3000/api/v1/users/${id}`); 
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setSnackbar({ open: true, message: "User deleted successfully!", severity: "success" });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOpenEditModal = (user) => {
    setFormData({ firstName: user.firstName, lastName: user.lastName, email: user.email });
    setCurrentUserId(user.id);
    setOpenEditModal(true);
  };

  const handleCancle = () => {
    setOpenEditModal(false);
    setFormData({ firstName: "", lastName: "", email: "" });
  }
  

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography align="center" color="error">{error}</Typography>;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Manage Users</Typography>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenAddModal(true)}>
          Add User
        </Button>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button size="small" color="primary" onClick={() => handleOpenEditModal(user)}>
                  Edit
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

     
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleAddUser} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField label="First Name" variant="outlined" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
            <TextField label="Last Name" variant="outlined" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
            <TextField label="Email" variant="outlined" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">Add User</Button>
              <Button onClick={() => setOpenAddModal(false)} color="secondary">Cancel</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleUpdateUser} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField label="First Name" variant="outlined" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
            <TextField label="Last Name" variant="outlined" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
            <TextField label="Email" variant="outlined" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">Update User</Button>
              <Button onClick={handleCancle} color="secondary">Cancel</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminUsers;








