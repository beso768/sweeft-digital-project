import { useContext } from 'react';
import { UserListContext } from './context/usersListContext';

export default function useList() {
  const context = useContext(UserListContext);
  if (!context) {
    throw new Error('Components must be in the UserListProvider');
  }
  return context;
}
