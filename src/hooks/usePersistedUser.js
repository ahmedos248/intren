// usePersistedUser.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { loadUserCart } from "../store/cartSlice";

const API_URL = "http://localhost:5000/users";

export const usePersistedUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Load user from localStorage
        const localUser = localStorage.getItem("user");
        if (!localUser) return;

        const parsedUser = JSON.parse(localUser);

        // Fetch full user from DB
        fetch(`${API_URL}?email=${parsedUser.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    const fullUser = data[0];

                    // Update Redux
                    dispatch(login(fullUser));

                    // Save back to localStorage
                    localStorage.setItem("user", JSON.stringify(fullUser));

                    // Load user's cart
                    dispatch(loadUserCart(fullUser.email));
                }
            })
            .catch((err) => console.error("❌ Failed to load persisted user:", err));
    }, [dispatch]);
};
