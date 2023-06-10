'use client';

type TProps = {
    error: Error;
    reset: () => void;
};
export default function Error({ error, reset }: TProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center">
            <div className="max-w-md w-full px-8 py-4 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">Something went wrong!</h2>
                <div className="text-gray-700 dark:text-gray-300 mb-6">{error.message}</div>
                <button
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500"
                    onClick={() => reset()}>
                    Try again
                </button>
            </div>
        </div>

    );
};