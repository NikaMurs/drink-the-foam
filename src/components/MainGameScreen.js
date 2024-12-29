import React from 'react';
import { getRandomItem, getRandomPenalties } from '../utils/randomize';
import { Card, Typography, Row, Col, Button } from 'antd';
import { MAPS } from '../constants/maps';
import { DIFFICULTIES } from '../constants/difficulties';
import { TRANSPORTS } from '../constants/transports';
import { ALWAYS_PENALTIES, RANDOM_PENALTIES } from '../constants/penalties';
import { useLocation, useNavigate } from 'react-router-dom';

const MainGameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const players = location.state?.players;

  if (!players || players.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography.Title level={2}>Ошибка</Typography.Title>
        <Typography.Paragraph>Нет данных о выбранных игроках. Вернитесь назад.</Typography.Paragraph>
        <Button type="primary" onClick={() => navigate('/player-selection')}>
          Назад к выбору игроков
        </Button>
      </div>
    );
  }

  const map = getRandomItem(MAPS);
  const difficulty = getRandomItem(DIFFICULTIES);
  const playerSettings = players.map(() => ({
    transport: getRandomItem(TRANSPORTS),
    penalties: [...ALWAYS_PENALTIES, ...getRandomPenalties(RANDOM_PENALTIES)],
  }));

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>Игра началась!</Typography.Title>
      <Typography.Paragraph><strong>Карта:</strong> {map}</Typography.Paragraph>
      <Typography.Paragraph><strong>Сложность:</strong> {difficulty}</Typography.Paragraph>
      <Row gutter={16}>
        {playerSettings.map((settings, index) => (
          <Col key={index} span={6}>
            <Card title={`Игрок ${index + 1}`} bordered>
              <Typography.Paragraph>
                <strong>Транспорт:</strong> {settings.transport}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Штрафы/Бонусы:</strong>
                <ul>
                  {settings.penalties.map((penalty, idx) => (
                    <li key={idx}>{penalty.text || penalty}</li>
                  ))}
                </ul>
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
      <Button type="primary" onClick={handleRestart} style={{ marginTop: '20px' }}>
        Перезапустить
      </Button>
    </div>
  );
};

export default MainGameScreen;
