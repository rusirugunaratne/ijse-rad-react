import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = (): void => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = (): void => {
        setCount(prevCount => prevCount - 1);
    };

    const handleReset = (): void => {
        setCount(0);
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-indigo-700 mb-8">Counter App</h1>

            <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                    onClick={handleDecrement}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-md"
                >
                    -
                </button>

                <h2 className="text-4xl font-bold text-gray-800 w-32 text-center">
                    {count}
                </h2>

                <button
                    onClick={handleIncrement}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-md"
                >
                    +
                </button>
            </div>

            <button
                onClick={handleReset}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md"
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
