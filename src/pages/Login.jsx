import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = useLogin();

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <form
                onSubmit={onSubmit}
                className="bg-white shadow-md rounded-xl p-8 w-80"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-3 py-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-3 py-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
