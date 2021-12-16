import React, { createContext, useReducer, useMemo } from 'react';
import userListReducer from '../reducer/usersListReducer';
import PropTypes from 'prop-types';

export const UserListContext = createContext(null);
UserListContext.displayName = 'UserListContext';

const initialState = { error: null, data: [], loading: false };

export default function UserListProvider({ children }) {
  const [state, dispatch] = useReducer(userListReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);
  if (state.error) {
    throw state.error;
  }
  return <UserListContext.Provider value={value}>{children}</UserListContext.Provider>;
}

UserListProvider.propTypes = {
  children: PropTypes.node,
};
