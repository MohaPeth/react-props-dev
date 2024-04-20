import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-center">
      <Container>
        <p className="text-white">&copy; Tous droits réservés - EuroNews 2024</p>
        <p className="text-white">Designed by DevDesign</p>
      </Container>
    </footer>
  );
};

export default Footer;
