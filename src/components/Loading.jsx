import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="d-flex justify-content-center my-2">
      <Spinner animation="grow" />
      <h4 className="ms-2">Loading...</h4>
    </div>
  );
}
