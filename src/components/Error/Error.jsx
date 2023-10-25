

const Error = () => {
    return (
        <div>
            
            <div className="bg-gray-100">
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-4xl font-semibold text-red-500">404 - Page Not Found</h1>
                    <p className="text-gray-700 my-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <a href="/" className="text-blue-500 hover:underline">Go to the Home Page</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Error;