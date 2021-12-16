import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/pages/404';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import UserListProvider from './state/context/usersListContext';
// import useList from './state/userList.hook';

function App() {
  const [userHistory, setUserHistory] = useState([]);
  return (
    <Router>
      <Container>
        <ErrorBoundary>
          <UserListProvider>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="user/:id"
                element={
                  <ErrorBoundary>
                    <UserPage userHistory={userHistory} setUserHistory={setUserHistory} />
                  </ErrorBoundary>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </UserListProvider>
        </ErrorBoundary>
      </Container>
    </Router>
  );
}

export default App;
