import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand as={Link} to="/">PT arkana putra mandiri</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Beranda</Nav.Link>
                <Nav.Link as={Link} to="/services">Kategori</Nav.Link>
                <NavDropdown title="Additional Menus" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Tentang kami </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bisnis kami</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">Kontak kami</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default navbar;