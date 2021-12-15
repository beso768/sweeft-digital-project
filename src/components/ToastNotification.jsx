import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';
export default function ToastNotification({ error }) {
  const [show, setShow] = useState(true);

  return (
    <Toast
      className="d-inline-block m-1"
      bg="danger"
      position="top-center"
      delay={3000}
      autohide
      onClose={() => setShow(false)}
      show={show}
    >
      <Toast.Header>Error</Toast.Header>
      <Toast.Body className="text-white">{error}</Toast.Body>
    </Toast>
  );
}
ToastNotification.propTypes = {
  error: PropTypes.string,
};
