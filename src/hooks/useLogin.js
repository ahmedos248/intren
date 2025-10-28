import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { loadUserCart, setUserId } from "../store/cartSlice";
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

const API_URL = process.env.REACT_APP_JSON_SERVER || "http://localhost:5000";

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(login(user));
        dispatch(setUserId(user.email));
        dispatch(loadUserCart(user.email));
    };

    const handleLogin = async (email, password) => {
        try {
            // Trim inputs
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();

            // 1️⃣ Authenticate with Firebase
            const userCredential = await signInWithEmailAndPassword(
                auth,
                trimmedEmail,
                trimmedPassword
            );
            const firebaseUser = userCredential.user;

            // 2️⃣ Fetch user data from JSON Server
            const res = await fetch(`${API_URL}/users?email=${firebaseUser.email}`);
            const users = await res.json();
            const dbUser = users[0];

            const mergedUser = dbUser
                ? { ...dbUser, uid: firebaseUser.uid }
                : {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName || "",
                    image: "/images/avatar.jpg",
                    isAdmin: false,
                };

            // 3️⃣ Save locally + Redux
            saveUser(mergedUser);
            navigate("/");
        } catch (error) {
            console.error("Login error:", error.code, error.message);
            alert(`❌ ${error.code}: ${error.message}`);
        }
    };

    const handleRegister = async (name, email, password, image) => {
        try {
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();
            const trimmedName = name.trim();

            // 1️⃣ Create Firebase account
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                trimmedEmail,
                trimmedPassword
            );
            const firebaseUser = userCredential.user;

            await updateProfile(firebaseUser, {
                displayName: trimmedName,
                photoURL: image || "/images/avatar.jpg",
            });

            // 2️⃣ Add user to JSON Server
            const newUser = {
                email: trimmedEmail,
                name: trimmedName,
                image: image || "/images/avatar.jpg",
                isAdmin: false,
            };

            await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            // 3️⃣ Save locally + Redux
            saveUser({ ...newUser, uid: firebaseUser.uid });
            navigate("/");
        } catch (error) {
            console.error("Register error:", error.code, error.message);
            alert(`❌ ${error.code}: ${error.message}`);
        }
    };

    return { handleLogin, handleRegister };
};

export default useLogin;
