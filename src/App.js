import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/pages/404';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import UserListProvider from './state/context/usersListContext';

function App() {
  const [userHistory, setUserHistory] = useState([]);

  return (
    <ErrorBoundary>
      <UserListProvider>
        <Container>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="user/:id"
                element={<UserPage userHistory={userHistory} setUserHistory={setUserHistory} />}
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </Container>
      </UserListProvider>
    </ErrorBoundary>
  );
}

export default App;
