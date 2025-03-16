import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

const MainScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);

    const [positionPercent, setPositionPercent] = useState({ x: 50, y: 50 });
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

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const measureSize = () => {
            const { width, height } = container.getBoundingClientRect();
            if (width && height) {
                setContainerSize({ width, height });
                setIsMeasured(true);
            }
        };

        measureSize();

        const resizeObserver = new ResizeObserver(measureSize);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, []);

    const calculatePixelPosition = () => {
        if (!isMeasured || !nodeRef.current) return { x: 0, y: 0 };
        const { width, height } = containerSize;
        const x = (positionPercent.x / 100) * width - nodeRef.current.offsetWidth / 2;
        const y = (positionPercent.y / 100) * height - nodeRef.current.offsetHeight / 2;
        return { x, y };
    };

    const pixelPosition = calculatePixelPosition();

    return (
        <div className="h-full w-full flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className="relative w-full max-w-[1100px]"
                style={{ aspectRatio: '12 / 9' }}
            >
                {/* background */}
                <img
                    src="assets/bg/computer_bg.png"
                    alt="Computer Background"
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                />

                {/* figure */}
                {isMeasured && (
                    <Draggable
                        nodeRef={nodeRef as React.RefObject<HTMLElement>}
                        bounds="parent"
                        position={pixelPosition}
                        onStop={(_, data) => updatePositionPercent(data)}
                    >
                        <div
                            ref={nodeRef}
                            className="absolute cursor-pointer w-[5%]"
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
