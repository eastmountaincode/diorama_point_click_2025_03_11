import React, { useRef, useState, useEffect } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

const MainScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);

    const [positionPercent, setPositionPercent] = useState({ x: 52, y: 59 });
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [isMeasured, setIsMeasured] = useState(false);

    const updatePositionPercent = (data: DraggableData) => {
        const container = containerRef.current;
        if (container) {
            const { width, height } = container.getBoundingClientRect();
            const newXPercent = ((data.x + data.node.offsetWidth / 2) / width) * 100;
            const newYPercent = ((data.y + data.node.offsetHeight / 2) / height) * 100;
            setPositionPercent({ x: newXPercent, y: newYPercent });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setContainerSize({ width, height });
            if (!isMeasured && width && height) {
                setIsMeasured(true);
            }
        });

        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, [isMeasured]);

    const calculatePixelPosition = () => {
        const { width, height } = containerSize;
        const x = (positionPercent.x / 100) * width;
        const y = (positionPercent.y / 100) * height;
        return { x: x - (nodeRef.current?.offsetWidth || 0) / 2, y: y - (nodeRef.current?.offsetHeight || 0) / 2 };
    };

    const pixelPosition = calculatePixelPosition();

    return (
        <div className="h-full w-full flex items-center justify-center overflow-hidden border-4 border-green-500">
            <div
                ref={containerRef}
                className="relative"
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    aspectRatio: '16 / 9',
                }}
            >
                <img
                    src="assets/bg/computer_bg.png"
                    alt="Computer Background"
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                />

                {isMeasured && (
                    <Draggable
                        nodeRef={nodeRef as React.RefObject<HTMLElement>}
                        bounds="parent"
                        position={pixelPosition}
                        onStop={(_, data) => updatePositionPercent(data)}
                    >
                        <div
                            ref={nodeRef}
                            className="absolute cursor-pointer"
                            style={{
                                width: '5%',
                            }}
                        >
                            <img
                                src="assets/figure_model.png"
                                alt="Figurine"
                                className="w-full h-auto"
                                draggable={false}
                            />
                        </div>
                    </Draggable>
                )}
            </div>
        </div>
    );
};

export default MainScene;
