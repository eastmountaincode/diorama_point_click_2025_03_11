import React from 'react';
import { useAtom } from 'jotai';
import { currentSceneAtom } from '../atoms/gameState';
import MainScene from '../scenes/MainScene';
import SceneOne from '../scenes/SceneOne';
import SceneTwo from '../scenes/SceneTwo';
import SceneThree from '../scenes/SceneThree';

const SceneManager: React.FC = () => {
    const [currentScene] = useAtom(currentSceneAtom);
    return (
        <div className="h-full w-full">
            {currentScene === 'main' && <MainScene />}
            {currentScene === 'scene1' && <SceneOne />}
            {currentScene === 'scene2' && <SceneTwo />}
            {currentScene === 'scene3' && <SceneThree />}
        </div>
        // <div className="h-full w-full">
        //     <p>Hello</p>
        // </div>
    );
};

export default SceneManager;
