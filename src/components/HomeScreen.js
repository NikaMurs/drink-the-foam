import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/player-selection');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography.Title level={1}>Разбился - пей пенное!</Typography.Title>
      <Button type="primary" size="large" onClick={handleStart}>Начать</Button>
    </div>
  );
};

export default HomeScreen;
