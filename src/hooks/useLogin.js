import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("Loaded users:", data);
                setUsers(data || []);
            })
            .catch((err) => console.error("Error loading users:", err));
    }, []);


    const handleLogin = (email, password) => {
        console.log("Trying:", email, password);
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            console.log("✅ Logged in as:", foundUser);
            dispatch(login(foundUser));
            localStorage.setItem("user", JSON.stringify(foundUser));
            navigate(foundUser.isAdmin ? "/admin" : "/");
        } else {
            alert("Invalid email or password");
            console.log("❌ No match found in:", users);
        }
    };

    return { handleLogin };
};

export default useLogin;
