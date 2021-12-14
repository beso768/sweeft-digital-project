import React, { useEffect, useRef, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { getData } from "../state/actionCreators/userListActions";
import useList from "../state/userList.hook";
import useObservable from "../utils/useObservable";
import List from "./List";
import UserCard from "./UserCard";

export default function Home() {
  return (
    <Row>
      {/* {state.data?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))} */}
      <List />
      {/* 
      {state.loading ? (
        <Spinner animation="grow" />
      ) : (
        <div ref={setElement}>test</div>
      )} */}
    </Row>
  );
}
