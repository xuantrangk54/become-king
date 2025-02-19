import React from "react";
import { Container, Nav } from "react-bootstrap";

const MenuGame = ({  }) => {
  return (
    <Nav className="flex-column">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#math">Math</Nav.Link>
      <Nav.Link href="#view-video">Videos</Nav.Link>
      <Nav.Link href="#vocabulary">vocabulary</Nav.Link>
      <Nav.Link href="/lucky-wheel">LuckyWheel</Nav.Link>
      <Nav.Link href="/pie-with-icons">pie-with-icons</Nav.Link>

    </Nav>
  );
};

export default MenuGame;
