import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Home = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Dữ liệu game giả lập (thay bằng API thật nếu có)
    const gameData = {
      id: gameId,
      name: `Game ${gameId}`,
      description: "Một trò chơi thú vị!",
      image: "https://via.placeholder.com/600x300",
    };
    setGame(gameData);
  }, [gameId]);

  if (!game) return <div className="text-center mt-5">Đang tải...</div>;

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Img variant="top" src={game.image} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
          <Button variant="success">Chơi ngay</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
