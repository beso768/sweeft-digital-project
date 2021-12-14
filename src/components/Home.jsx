import React, { useEffect, useRef, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { getData } from "../state/actionCreators/userListActions";
import useList from "../state/userList.hook";
import UserCard from "./UserCard";

export default function Home() {
  const [state, dispatch] = useList();
  const [page, setPage] = useState(1);
  const [element, setElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        console.log(first);
        if (first.isIntersecting) {
          setPage((current) => current + 1);
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    getData(dispatch, page);
  }, [page]);

  return (
    <Row>
      {state.data?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}

      {state.loading ? (
        <Spinner animation="grow" />
      ) : (
        <div ref={setElement}>test</div>
      )}
    </Row>
  );
}
