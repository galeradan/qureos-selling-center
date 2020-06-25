import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


const AppNavBar =()=>{
    return(

        <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={NavLink} to="/products">Seller Center</Navbar.Brand>
                    <Nav className="ml-auto flex-row">
                            <Nav.Link as={NavLink} activeClassName="active" to="/products" exact={true} className="mr-1">Products</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="active" to="/products/manage" className="">Manage</Nav.Link>
                    </Nav>
                </Navbar>
        </React.Fragment>

    )


}

export default AppNavBar;