import React from "react";
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="shadow" style={{ backgroundColor: '#8cd3e8' }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">EuroNews</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            Signed in as: <a href="#login" style={{ textDecoration: 'none' }}>Moha GMC</a> {/*Utilisations de style de ligne/*/}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
