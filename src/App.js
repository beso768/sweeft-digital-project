import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import UserListProvider from "./state/usersListContext";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <UserListProvider>
                <Home />
              </UserListProvider>
            }
          />
          <Route path="user/:id" element={<User />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
