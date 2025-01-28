
"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { getData, postData, patchData, deleteData } from "@/utils/actions"; // فرض بر این است که متدهای کمک‌کننده برای فراخوانی API در فایل actions قرار دارند.

function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({ name: "", cuisine: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getData("http://localhost:3000/api/v1/recipes");
        setRecipes(data.recipes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      const newRecipe = await postData("http://localhost:3000/api/v1/recipes", formData);
      setRecipes((prev) => [...prev, newRecipe]);
      setFormData({ name: "", cuisine: "" });
      setSnackbar({ open: true, message: "Recipe added successfully!", severity: "success" });
      setOpenAddModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    try {
      const updatedRecipe = await patchData(`http://localhost:3000/api/v1/recipes/${currentRecipeId}`, formData);
      setRecipes((prev) =>
        prev.map((recipe) => (recipe.id === currentRecipeId ? updatedRecipe : recipe))
      );
      setSnackbar({ open: true, message: "Recipe updated successfully!", severity: "success" });
      setOpenEditModal(false);
      setFormData({ name: "", cuisine: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await deleteData(`http://localhost:3000/api/v1/recipes/${id}`);
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      setSnackbar({ open: true, message: "Recipe deleted successfully!", severity: "success" });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOpenEditModal = (recipe) => {
    setFormData({ name: recipe.name, cuisine: recipe.cuisine });
    setCurrentRecipeId(recipe.id);
    setOpenEditModal(true);
  };

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography align="center" color="error">{error}</Typography>;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Manage Recipes</Typography>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenAddModal(true)}>
          Add Recipe
        </Button>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">{recipe.name}</Typography>
                <Typography variant="body2" color="textSecondary">{recipe.cuisine}</Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button size="small" color="primary" onClick={() => handleOpenEditModal(recipe)}>
                  Edit
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteRecipe(recipe.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <DialogTitle>Add Recipe</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleAddRecipe} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField label="Name" variant="outlined" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <TextField label="Cuisine" variant="outlined" value={formData.cuisine} onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })} required />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">Add Recipe</Button>
              <Button onClick={() => setOpenAddModal(false)} color="secondary">Cancel</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Recipe</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleUpdateRecipe} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField label="Name" variant="outlined" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <TextField label="Cuisine" variant="outlined" value={formData.cuisine} onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })} required />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">Update Recipe</Button>
              <Button onClick={() => setOpenEditModal(false)} color="secondary">Cancel</Button>
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

export default AdminRecipes;


