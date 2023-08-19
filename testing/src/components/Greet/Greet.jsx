import React from "react";

export function Greet({ name }) {
  return (
    <div>
      <h1>{name ? `Hello ${name}` : "Hello Guest"}</h1>
      <h2>name content</h2>
    </div>
  );
}
