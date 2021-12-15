import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import UserListProvider from './state/context/usersListContext';

function App() {
  const [userHistory, setUserHistory] = useState([]);
  return (
    <Router>
      <Container>
        <UserListProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="user/:id"
              element={<UserPage userHistory={userHistory} setUserHistory={setUserHistory} />}
            />
          </Routes>
        </UserListProvider>
      </Container>
    </Router>
  );
}

export default App;
