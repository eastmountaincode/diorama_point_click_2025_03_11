import React from 'react';
import SceneManager from '../logic/SceneManager';
import HUD from './HUD';

const GameCanvas: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row border-4 border-blue-500">

            <div className="flex-grow border-4 border-red-500">
                <SceneManager />
            </div>
            <HUD />

        </div>
    );
};

export default GameCanvas;
