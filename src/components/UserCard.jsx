import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Col key={user.id} md="4" className="h-auto card-wrapper my-4">
      <Link to={`user/${user.id}`}>
        <Card className="h-100">
          <Card.Img variant="top" src={`${user.imageUrl}?=v${user.id}`} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{user.title}</Card.Title>
            <Card.Text>
              {user.name} {user.lastName}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
