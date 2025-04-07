const LoginForm = () => {
    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-6">LOGIN/REGISTER</h2>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">NAME*</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">EMAIL ID*</label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-600 text-white font-semibold py-2 rounded hover:bg-violet-700 transition"
                >
                    Register
                </button>
            </form>

            <div className="my-4 text-center text-sm text-gray-500">OR</div>

            <button className="w-full border border-teal-400 text-teal-600 py-2 rounded hover:bg-teal-50 transition">
                REGISTER WITH GOOGLE ACCOUNT
            </button>
        </div>
    );
};

export default LoginForm;
