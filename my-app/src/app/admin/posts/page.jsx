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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { getData, postData, patchData, deleteData } from "@/utils/actions";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getData("http://localhost:3000/api/v1/posts");
        setPosts(data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  
  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = await postData("http://localhost:3000/api/v1/posts", formData);
      setPosts((prev) => [...prev, newPost]);
      setFormData({ title: "", body: "" });
      setSnackbar({ open: true, message: "Post added successfully!", severity: "success" });
      setOpenAddModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = await patchData(`http://localhost:3000/api/v1/posts/${currentPostId}`, formData);
      setPosts((prev) =>
        prev.map((post) => (post.id === currentPostId ? updatedPost : post))
      );
      setSnackbar({ open: true, message: "Post updated successfully!", severity: "success" });
      setOpenEditModal(false);
      setFormData({ title: "", body: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  
  const handleDeletePost = async (id) => {
    try {
      await deleteData(`http://localhost:3000/api/v1/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      setSnackbar({ open: true, message: "Post deleted successfully!", severity: "success" });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOpenEditModal = (post) => {
    setFormData({ title: post.title, body: post.body });
    setCurrentPostId(post.id);
    setOpenEditModal(true);
  };

  
  const handleCloseModals = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
    setFormData({ title: "", body: "" });
  };

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography align="center" color="error">{error}</Typography>;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Posts
      </Typography>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenAddModal(true)}>
          Add Post
        </Button>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.body.slice(0, 100)}...
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button size="small" color="primary" onClick={() => handleOpenEditModal(post)}>
                  Edit
                </Button>
                <Button size="small" color="error" onClick={() => handleDeletePost(post.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      
      <Dialog open={openAddModal} onClose={handleCloseModals}>
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleAddPost} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField
              label="Title"
              variant="outlined"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <TextField
              label="Body"
              variant="outlined"
              multiline
              rows={4}
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              required
            />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
              <Button onClick={handleCloseModals} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      
      <Dialog open={openEditModal} onClose={handleCloseModals}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleUpdatePost} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField
              label="Title"
              variant="outlined"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <TextField
              label="Body"
              variant="outlined"
              multiline
              rows={4}
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              required
            />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
              <Button onClick={handleCloseModals} color="secondary">
                Cancel
              </Button>
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


// "use client";
// import React, { useState, useEffect } from "react";
// import { 
//   Card, 
//   CardContent, 
//   CardActions, 
//   Typography, 
//   Button, 
//   Grid, 
//   Box, 
//   Modal, 
//   TextField, 
//   Snackbar, 
//   Alert 
// } from "@mui/material";
// import { getData, postData, patchData, deleteData } from "@/utils/actions";

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
// };

// export default function AdminPosts() {
//   const [posts, setPosts] = useState([]);
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [currentPostId, setCurrentPostId] = useState(null);
//   const [formData, setFormData] = useState({ title: "", body: "" });
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await getData("http://localhost:3000/api/v1/posts");
//       setPosts(data.posts);
//     };

//     fetchPosts();
//   }, []);

//   const handleAddPost = async (e) => {
//     e.preventDefault();
//     try {
//       const newPost = await postData("http://localhost:3000/api/v1/posts", {
//         title: formData.title,
//         body: formData.body,
//       });


//       setPosts((prev) => [...prev, newPost]);
//       setSnackbar({ open: true, message: "Post added successfully!", severity: "success" });
//       setFormData({ title: "", body: "" });
//       setOpenAddModal(false);
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to add post!", severity: "error" });
//     }
//   };

//   const handleEditPost = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedPost = await patchData(`http://localhost:3000/api/v1/posts/${currentPostId}`, {
//         title: formData.title,
//         body: formData.body,
//       });
//       console.log("Current Post ID:", currentPostId);
//       console.log("Edit URL:", `http://localhost:3000/api/admin/posts/${currentPostId}`);
//       setPosts((prev) =>
//         prev.map((post) => (post.id === currentPostId ? updatedPost : post))
//       );
//       setSnackbar({ open: true, message: "Post updated successfully!", severity: "success" });
//       setOpenEditModal(false);
//       setFormData({ title: "", body: "" });
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to update post!", severity: "error" });
//     }
//   };

//   const handleDeletePost = async (id) => {
//     try {
//       await deleteData(`http://localhost:3000/api/v1/posts/${id}`);
//       setPosts((prev) => prev.filter((post) => post.id !== id));
//       setSnackbar({ open: true, message: "Post deleted successfully!", severity: "success" });
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to delete post!", severity: "error" });
//     }
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Manage Posts
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => setOpenAddModal(true)}
//         sx={{ mb: 4 }}
//       >
//         Add Post
//       </Button>
//       <Grid container spacing={4} justifyContent="center">
//         {posts.map((post) => (
//           <Grid item xs={12} sm={6} md={4} key={post.id}>
//             <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">{post.title}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {post.body.slice(0, 100)}...
//                 </Typography>
//               </CardContent>
//               <CardActions sx={{ mt: "auto" }}>
//                 <Button
//                   size="small"
//                   color="primary"
//                   onClick={() => {
//                     setCurrentPostId(post.id);
//                     setFormData({ title: post.title, body: post.body });
//                     setOpenEditModal(true);
//                   }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   color="error"
//                   onClick={() => handleDeletePost(post.id)}
//                 >
//                   Delete
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Add Modal */}
//       <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
//         <Box sx={modalStyle}>
//           <Typography variant="h6" gutterBottom>
//             Add Post
//           </Typography>
//           <form onSubmit={handleAddPost}>
//             <TextField
//               fullWidth
//               label="Title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Body"
//               value={formData.body}
//               onChange={(e) => setFormData({ ...formData, body: e.target.value })}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Add Post
//             </Button>
//           </form>
//         </Box>
//       </Modal>

//       {/* Edit Modal */}
//       <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
//         <Box sx={modalStyle}>
//           <Typography variant="h6" gutterBottom>
//             Edit Post
//           </Typography>
//           <form onSubmit={handleEditPost}>
//             <TextField
//               fullWidth
//               label="Title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Body"
//               value={formData.body}
//               onChange={(e) => setFormData({ ...formData, body: e.target.value })}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Update Post
//             </Button>
//           </form>
//         </Box>
//       </Modal>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//       >
//         <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
//       </Snackbar>
//     </Box>
//   );
// }


