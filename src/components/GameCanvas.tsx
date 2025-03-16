import React from 'react';
import SceneManager from '../logic/SceneManager';
import HUD from './HUD';

const GameCanvas: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row ">

            <div className="flex-grow h-3/6 md:h-auto ">
                <SceneManager />
            </div>
            <div className=" h-2/6 md:h-auto">
                <HUD />
            </div>

        </div>
    );
};

export default GameCanvas;
