import React from 'react';
import GameCanvas from './GameCanvas';
//import DebugBar from './DebugBar';

const GameSpace: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-400">

            {/* ✅ Main Content Area */}
            <main className="flex-1 bg-gray-500 relative">
                <GameCanvas />
            </main>

            {/* ✅ Debug Bar (Bottom) */}
            {/* <DebugBar /> */}
        </div>
    );
};

export default GameSpace;


