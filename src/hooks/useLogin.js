import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { loadUserCart, setUserId } from "../store/cartSlice"; // add setUserId

const useLogin = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data || []))
            .catch((err) => console.error("Error loading users:", err));
    }, []);

    const saveLightUser = (fullUser) => {
        const { image, ...light } = fullUser;
        localStorage.setItem("user", JSON.stringify(light));
        dispatch(login(fullUser));
    };

    const handleLogin = (email, password) => {
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            console.log("✅ Logged in as:", foundUser);
            saveLightUser(foundUser);
            dispatch(setUserId(foundUser.email)); // ← important
            dispatch(loadUserCart(foundUser.email)); // load cart
            navigate(foundUser.isAdmin ? "/admin" : "/");
        } else {
            alert("Invalid email or password");
        }
    };

    const handleRegister = async (name, email, password) => {
        const existing = users.find((u) => u.email === email);
        if (existing) return alert("Email already exists!");

        const newUser = {
            email,
            password,
            name,
            isAdmin: false,
            image: "",
            cart: { products: [], totalQuantity: 0, totalPrice: 0 },
        };

        try {
            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (!res.ok) throw new Error("Failed to register user");

            const data = await res.json(); // json-server assigns the ID
            console.log("✅ Registered user:", data);

            setUsers((prev) => [...prev, data]);
            saveLightUser(data);
            dispatch(setUserId(data.email)); // ← important
            dispatch(loadUserCart(data.email)); // load empty cart
            navigate("/");
        } catch (err) {
            console.error("❌ Register error:", err);
        }
    };

    return { handleLogin, handleRegister };
};

export default useLogin;
