import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';
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
        const activePlayers = players.map((isActive, index) => (isActive ? index + 1 : null)).filter(player => player !== null);
        if (activePlayers.length === 0) {
            alert('Выберите хотя бы одного игрока!');
            return;
        }
        navigate('/main-game', { state: { players: activePlayers } });
    };

    return (
        <>
            <div style={
                {
                    height: '80vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    padding: '20px',
                    justifyContent: 'center',
                    backgroundColor: '#181818'
                }}>
                {players.map((active, index) => (
                    <Card
                        key={index}
                        style={{
                            background: active ? '#1890ff' : '#3c3c3c',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '12px',
                            width: 'calc(50% - 20px)',
                            height: '45%',
                            cursor: 'pointer',
                        }}
                        onClick={() => togglePlayer(index)}
                    >
                        <Typography.Title level={2} style={{ color: 'inherit' }}>{`Игрок ${index + 1}`}</Typography.Title>
                    </Card>
                ))}
            </div>
            <div
                style={{
                    height: 'calc(20vh - 40px)',
                    justifyContent: 'center',
                    backgroundColor: '#181818'
                }}>
                <Button
                    type="primary"
                    onClick={handleContinue}
                    style={{
                        marginTop: '10px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        width: 'calc(100% - 40px)',
                        height: '40px'
                    }}
                >
                    Продолжить
                </Button>
            </div>
        </>
    );
};

export default PlayerSelectionScreen;
