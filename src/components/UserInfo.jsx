import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
export default function UserInfo({ user }) {
  return (
    <Card className="h-100">
      <Card.Img variant="left" src={`${user.imageUrl}?=v${user.id}`} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <section className="d-flex justify-content-between flex-wrap">
          <div>
            <div className="my-1">
              <h4>
                {user.prefix} {user.name} {user.lastName}
              </h4>
              <i>{user.title}</i>
            </div>
            <div>
              <span>Email</span> : {user.email}
            </div>
            <div>
              <span>Ip Address</span> : {user.ip}
            </div>
            <div>
              <span>Job Area</span> : {user.jobArea}
            </div>
            <div>
              <span>Paradigm Job Type</span> : {user.jobType}
            </div>
          </div>
          <div>
            <div className="my-1">
              <h6>address</h6>
              {user.company.name} {user.company.suffix}
            </div>
            <div>
              <span>City</span> : {user.address.city}
            </div>
            <div>
              <span>Country</span> : {user.address.country}
            </div>
            <div>
              <span>State</span> : {user.address.state}
            </div>
            <div>
              <span>Address</span> : {user.address.streetAddress}
            </div>
          </div>
        </section>
      </Card.Body>
    </Card>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};
