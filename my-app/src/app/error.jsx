"use client";

import React from "react";

function error({ error, reset }) {
  return (
    <div>
      <p mt={10}>{error.message}</p>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default error;