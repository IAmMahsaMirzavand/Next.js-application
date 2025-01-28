"use client";
import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Grid, Box } from "@mui/material";
// import {  Grid } from "@mui/material/Grid2";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the Home Page
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Link href="/users" passHref>
                  <Typography variant="h6" color="primary" sx={{ cursor: "pointer", mb: 2 }}>
                    Users
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                  Manage user data and profiles
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Link href="/users" passHref>
                  <Button size="small" color="primary">
                    Go to Users
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Link href="/posts" passHref>
                  <Typography variant="h6" color="success" sx={{ cursor: "pointer", mb: 2 }}>
                    Posts
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                  Explore and share blog posts
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Link href="/posts" passHref>
                  <Button size="small" color="success">
                    Go to Posts
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Link href="/recipes" passHref>
                  <Typography variant="h6" color="error" sx={{ cursor: "pointer", mb: 2 }}>
                    Recipes
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                  Discover delicious recipes
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Link href="/recipes" passHref>
                  <Button size="small" color="error">
                    Go to Recipes
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

       
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Admin Dashboard
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Link href="/admin/users" passHref>
                    <Typography variant="h6" color="secondary" sx={{ cursor: "pointer", mb: 2 }}>
                      Manage Users
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    Modify user profiles and data
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Link href="/admin/users" passHref>
                    <Button size="small" color="secondary">
                      Go to Manage Users
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Link href="/admin/posts" passHref>
                    <Typography variant="h6" color="primary" sx={{ cursor: "pointer", mb: 2 }}>
                      Manage Posts
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    Edit or delete blog posts
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Link href="/admin/posts" passHref>
                    <Button size="small" color="primary">
                      Go to Manage Posts
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Link href="/admin/recipes" passHref>
                    <Typography variant="h6" color="error" sx={{ cursor: "pointer", mb: 2 }}>
                      Manage Recipes
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    Edit or delete recipes
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Link href="/admin/recipes" passHref>
                    <Button size="small" color="error">
                      Go to Manage Recipes
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
