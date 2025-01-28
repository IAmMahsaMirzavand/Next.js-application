"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import { getData } from "@/utils/actions";

const UserCard = async ({ params }) => {
  const user = await getData(`http://localhost:3000/api/v1/users/${params.id}`);
  const address = `${user.address.country} ${user.address.state} ${user.address.city} ${user.address.address}`;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      padding={4}
    >
      <Card
        sx={{
          bgcolor: "slategray",
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          padding: 2,
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" component="div">
              {user.firstName} {user.lastName}
            </Typography>
          }
        />
        <CardContent>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Typography variant="body2">
                <strong>Email:</strong> {user.email}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Age:</strong> {user.age}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Gender:</strong> {user.gender}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Birth date:</strong> {user.birthDate}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Address:</strong> {address}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Role:</strong> {user.role}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>University:</strong> {user.university}
              </Typography>
            </li>
          </ul>
        </CardContent>
        <CardActions>
          <Link href="/users" passHref>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default UserCard;
