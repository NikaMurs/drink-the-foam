import React, { useState } from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const PlayerSelectionScreen = () => {
  const [players, setPlayers] = useState([false, false, false, false]);
  const navigate = useNavigate();

  const togglePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = !updatedPlayers[index];
    setPlayers(updatedPlayers);
  };

  const handleContinue = () => {
    const activePlayers = players
      .map((isActive, index) => (isActive ? index + 1 : null))
      .filter(player => player !== null);
    if (activePlayers.length === 0) {
      alert('Выберите хотя бы одного игрока!');
      return;
    }
    navigate('/main-game', { state: { players: activePlayers } });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography.Title level={2}>Выберите игроков</Typography.Title>
      <Row gutter={16}>
        {players.map((active, index) => (
          <Col key={index} span={6}>
            <Button
              type={active ? 'primary' : 'default'}
              onClick={() => togglePlayer(index)}
              block
            >
              {`Игрок ${index + 1}`}
            </Button>
          </Col>
        ))}
      </Row>
      <Button type="primary" onClick={handleContinue} style={{ marginTop: '20px' }}>
        Продолжить
      </Button>
    </div>
  );
};

export default PlayerSelectionScreen;
