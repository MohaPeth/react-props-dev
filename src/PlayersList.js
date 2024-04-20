import React from "react";
import Player from "./Player";
import playersData from "./PlayersData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlayersList = () => {
  return (
    <div className="text-center justify-content-center"> {/* Centering content */}

      <Row className="py-3"> 
        {playersData.slice(0, 3).map((player, index) => (
          <Col key={index} xs={12} sm={4} className="d-flex justify-content-center">
            <Player {...player} />
          </Col>
        ))}
      </Row>

      <Row className="py-3">
        {playersData.slice(3, 5).map((player, index) => (
          <Col key={index} xs={12} sm={6} className="d-flex justify-content-center">
            <Player {...player} />
          </Col>
        ))}
      </Row>

      <Row className="py-3">
        {playersData.slice(5, 8).map((player, index) => (
          <Col key={index} xs={12} sm={4} className="d-flex justify-content-center">
            <Player {...player} />
          </Col>
        ))}
      </Row>
      {/* Rows for the other players */}
    </div>
  );
};

export default PlayersList;
