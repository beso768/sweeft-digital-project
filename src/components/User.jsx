import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function User() {
  let { id } = useParams();

  return <Row></Row>;
}
