import { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { clearData, getData } from "../state/actionCreators/userListActions";
import useList from "../state/userList.hook";
import useObservable from "../utils/useObservable";
import UserCard from "./UserCard";

export default function List({ userId }) {
  const [state, dispatch] = useList();
  const [page, setPage] = useState(1);
  const [element, setElement] = useState(null);

  useObservable(element, setPage); //   when ref element's "isIntersecting" property is true this hook will increment page

  useEffect(() => {
    clearData(dispatch);
  }, [userId]);

  useEffect(() => {
    getData(dispatch, page, userId);
  }, [page, userId]);

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
      <div ref={setElement}>test</div>
    </Row>
  );
}
