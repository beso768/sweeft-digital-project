import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserCard from "./UserCard";
import List from "./List";

export default function User() {
  const [user, setUser] = useState(null);
  const [friendList, setFriendList] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    ).then((response) => setUser(response.data));
    // axios(
    //   `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/20`
    // ).then((response) => setFriendList(response.data.list));
  }, [id]);

  return (
    <>
      {user && (
        <>
          <Row>
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
          </Row>
          <h3>Friends List</h3>
          <Row>
            <List userId={user.id} />
          </Row>
        </>
      )}
    </>
  );
}
