import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <>
      <Navbar className="nav-custom">
        <Navbar.Brand as={NavLink} activeClassName="" to="/products">
          Seller Center
        </Navbar.Brand>
        <Nav className="ml-auto flex-row">
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            to="/products"
            exact
            className="mr-1"
          >
            Products
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            to="/products/manage"
            className=""
          >
            Manage
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default AppNavBar;
