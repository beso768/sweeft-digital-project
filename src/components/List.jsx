import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { clearData, getData } from '../state/actionCreators/userListActions';
import useList from '../state/userList.hook';
import useObservable from '../hooks/useObservable';
import Loading from './Loading';

import UserCard from './UserCard';

export default function List({ userId = null }) {
  const [state, dispatch] = useList();
  const [page, setPage] = useState(1);
  const [element, setElement] = useState(null);

  //   when last element appears  this hook will increment page number
  useObservable(element, setPage);

  // if user changes clear the previous friend list
  useEffect(() => {
    clearData(dispatch);
  }, [userId, dispatch]);

  useEffect(() => {
    getData(dispatch, page, userId);
  }, [page, userId, dispatch]);

  return (
    <Row>
      {state.data?.map((user, i) => {
        return i === state.data.length - 1 && !state.loading && page < 2000 ? (
          <div key={user.id} ref={setElement}>
            <UserCard user={user} />
          </div>
        ) : (
          <UserCard user={user} key={user.id} />
        );
      })}
      {state.loading && <Loading />}
    </Row>
  );
}

List.propTypes = {
  userId: PropTypes.number,
};
