import React from 'react';

const HUD: React.FC = () => {
    return (
        <div className="bg-gray-800 p-2 text-white h-full flex flex-col md:w-96 md:items-center items-start justify-center md:justify-start">
            {/* PARENTCONTAINER */}
            <div className="flex md:flex-col flex-row gap-0 items-center md:h-full md:justify-evenly w-full justify-evenly">
                {/* GRID CONTAINER */}
                <div className="flex">
                    <div className="grid grid-cols-2 gap-2 items-center justify-center">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-700 flex items-center justify-center aspect-square md:w-22 md:h-22"
                            >
                                <span className="text-sm text-gray-400">Item {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BORROMEAN KNOT CONTAINER */}
                <div className="flex flex-col items-center justify-center aspect-square border-2 border-white-500">
                    <span className='text-center px-2'>Borromean <br /> Knot</span>
                </div>

                {/* INTERACT BUTTON CONTAINER */}
                <div className="flex flex-col items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Interact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HUD;
