import React from "react";

export default function UserCard({ user, post, recipe }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
        {user.image} {user.lastName}
      </h2>
      <p style={{ margin: "5px 0" }}>Email: {user.email}</p>
      <p style={{ margin: "5px 0" }}>Age: {user.age}</p>

      <h3 style={{ marginTop: "15px", fontSize: "1.2rem" }}>Post:</h3>
      <p>
        <strong>{post.title}</strong>
        <br />
        {post.body.slice(0, 50)}...
      </p>

      <h3 style={{ marginTop: "15px", fontSize: "1.2rem" }}>Recipe:</h3>
      <p>
        <strong>{recipe.image}</strong>
        <br />
        {recipe.description}...
      </p>
    </div>
  );
}
