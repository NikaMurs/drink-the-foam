import React from 'react';
import { Card, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#181818' }}>
            <Card
                style={{
                    width: '400px',
                    textAlign: 'center',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography.Title level={1} style={{ fontSize: '32px', marginBottom: '20px', color: '#181818' }}>
                    Разбился - пей пенное!
                </Typography.Title>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => navigate('/player-selection')}
                    style={{
                        fontSize: '20px',
                        padding: '12px 24px',
                        borderRadius: '8px',
                    }}
                >
                    Готов!
                </Button>
            </Card>
        </div>
    );
};

export default HomeScreen;
