import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 Not found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
