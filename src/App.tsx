import { useState } from 'react';
import './App.css';
import GameSpace from './components/GameSpace';
import StartGameModal_03 from './components/modals/StartGameModal_03';

function App() {
    const [gameStarted, setGameStarted] = useState(true);

    return (
        <div className="w-full flex flex-col bg-gray-200" style={{ height: '100dvh' }}>
            <div className="flex-1 overflow-hidden">
                {gameStarted ? (
                    <GameSpace />
                ) : (
                    <StartGameModal_03 onStartGame={() => setGameStarted(true)} />
                )}
            </div>
        </div>
    );
}

export default App;


