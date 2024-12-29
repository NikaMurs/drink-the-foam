import React from 'react';
import { getRandomItem, getRandomPenalties } from '../utils/randomize';
import { Card, Typography, Button, Divider } from 'antd';
import { MAPS } from '../constants/maps';
import { DIFFICULTIES } from '../constants/difficulties';
import { TRANSPORTS } from '../constants/transports';
import { ALWAYS_PENALTIES, RANDOM_PENALTIES } from '../constants/penalties';
import { useLocation, useNavigate } from 'react-router-dom';
import { BOTS_CARS } from '../constants/botsCars';
import { ReloadOutlined } from '@ant-design/icons';

const MainGameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const players = location.state?.players;

  if (!players || players.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography.Title level={2} style={{ color: '#f5222d' }}>Ошибка</Typography.Title>
        <Typography.Paragraph style={{ color: '#fff' }}>
          Нет данных о выбранных игроках. Вернитесь назад.
        </Typography.Paragraph>
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
    penalties: getRandomPenalties(RANDOM_PENALTIES),
  }));

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#181818' }}>
      {/* Левая панель */}
      <div style={{ width: '30%', padding: '20px', color: '#fff', borderRight: '2px solid #444', backgroundColor: '#fff' }}>
        <Typography.Title level={3}>
          Общие настройки
          <Button
            icon={<ReloadOutlined />}
            type="text"
            style={{ color: '#181818' }}
            onClick={() => window.location.reload()}
          />
        </Typography.Title>
        <Divider />
        <Typography.Paragraph>
          <strong>Карта:</strong> {map}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Сложность:</strong> {difficulty}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Боты едут на:</strong> {getRandomPenalties(BOTS_CARS) || 'Случайно'}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Правила:</strong>
          <ul style={{ paddingLeft: '20px' }}>
            {ALWAYS_PENALTIES.map((penalty, idx) => (
              <li key={idx}>{penalty.text || penalty}</li>
            ))}
          </ul>
        </Typography.Paragraph>
      </div>
      {/* Правая панель */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {playerSettings.map((settings, index) => (
          <Card
            key={index}
            style={{
              color: '#fff',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              flexBasis: 'calc(50% - 10px)', // Для двух элементов в ряду
            }}
          >
            <Typography.Title level={4}>{`Игрок ${index + 1}`}</Typography.Title>
            <Typography.Paragraph><strong>Транспорт:</strong> {settings.transport}</Typography.Paragraph>
            <Typography.Paragraph>
              <strong>Штрафы/Бонусы:</strong>
              {settings.penalties ?
                <ul style={{ paddingLeft: '20px' }}>
                  <li>{settings.penalties}</li>
                </ul> :
                <></>
              }
            </Typography.Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainGameScreen;
