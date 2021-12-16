import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { setError } from '../../state/actionCreators/userListActions';
import { fetchUser } from '../../utils/httpService';
import List from '../List';
import UserInfo from '../UserInfo';
import useList from './../../state/userList.hook';

export default function UserPage({ userHistory, setUserHistory }) {
  const [user, setUser] = useState(null);
  const [, dispatch] = useList();

  let { id } = useParams();

  useEffect(async () => {
    try {
      const userResponse = await fetchUser(id);
      setUser(userResponse);
      // set unique user objects in list
      let exist = userHistory.find(u => u.id === userResponse.id);
      if (!exist) {
        setUserHistory(curr => [...curr, userResponse]);
      }
    } catch (error) {
      setError(dispatch, error);
    }

    return () => {
      setUserHistory([]);
    };
  }, [id]);

  return (
    <>
      {user && (
        <>
          <Row>
            <UserInfo user={user} />
          </Row>
          <Row className="my-3">
            {userHistory.map((u, i) => (
              <Link to={`/user/${u.id}`} key={u.id} className="w-auto mx-1 px-0">
                {u.prefix} {u.name} {u.lastName}
                {i !== userHistory.length - 1 && <span className="ms-1">/</span>}
              </Link>
            ))}
          </Row>
          <h3 className="my-3">Friends List</h3>
          <Row>
            <List userId={user.id} />
          </Row>
        </>
      )}
    </>
  );
}

UserPage.propTypes = {
  userHistory: PropTypes.array,
  setUserHistory: PropTypes.func,
};
