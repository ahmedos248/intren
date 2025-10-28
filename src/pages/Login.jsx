import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const { handleLogin, handleRegister } = useLogin();

    const onSubmit = (e) => {
        e.preventDefault();
        if (isRegister) handleRegister(name, email, password, image);
        else handleLogin(email, password);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded-xl p-8 w-80">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    {isRegister ? "Register" : "Login"}
                </h2>

                {isRegister && (
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border rounded-lg px-3 py-2 mb-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-3 py-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full border rounded-lg px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                        <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition"
                    onClick={() => setImage("/images/avatar.jpg")}
                >
                    {isRegister ? "Register" : "Login"}
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => setIsRegister(!isRegister)}
                        className="text-blue-600 hover:underline"
                    >
                        {isRegister ? "Login" : "Register"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
