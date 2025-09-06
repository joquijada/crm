import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import "./App.css";
import Routes from "./Routes.tsx"
import { LinkContainer } from "react-router-bootstrap";
import { AppContext, type AppContextType } from "./lib/contextLib";
import { useState } from "react";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3" id="crm-top-nav-bar">
        <LinkContainer to="/">
          <a href=""><img alt="Clever Fox CRM" src="/clever-fox.png"/><span>CRM</span></a>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated } as AppContextType}>
        <Routes/>
      </AppContext.Provider>

    </div>
  );
}

export default App;
