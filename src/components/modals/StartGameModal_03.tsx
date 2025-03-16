import { useState, useEffect } from 'react';

interface StartGameModal_03Props {
    onStartGame: () => void;
}

const StartGameModal_03 = ({ onStartGame }: StartGameModal_03Props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate memory loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const asciiArt = `
___________________
|  DIORAMA v0.3   |
|   _________     |
|  |         |    |
|  |  ☆   ○  |    |
|  |_________|    |
|_________________|
    `;

    return (
        <div className="h-full w-full flex items-center justify-center bg-black text-green-500 font-mono">
            <div className="text-center">
                <pre className="mb-8 text-xs sm:text-sm whitespace-pre">
                    {asciiArt}
                </pre>
                
                {isLoading ? (
                    <div className="animate-pulse">
                        Loading memory segments...
                    </div>
                ) : (
                    <button
                        onClick={onStartGame}
                        className="px-4 py-2 border border-green-500 hover:bg-green-500 hover:text-black transition-colors"
                    >
                        LAUNCH SEQUENCE
                    </button>
                )}
            </div>
        </div>
    );
};

export default StartGameModal_03;