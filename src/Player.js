import React from "react";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

// Ici je gère le design de mes attributs via une Carte Bootstrap pour afficher les détails du joueur
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card className="shadow" style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Define PropTypes attendus pour le composant Player
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageURL: PropTypes.string,
};

// Define PropTypes default values
Player.defaultProps = {
  name: "Moha Pether",
  team: "DevDesign",
  nationality: "Gabonese",
  jerseyNumber: 23, 
  age: 23, 
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBsty-4Rx02De7hfTOeeuavEZBM2XAeluIA&usqp=CAU", 
};


export default Player;
