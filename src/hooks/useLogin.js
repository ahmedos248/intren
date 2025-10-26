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

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveLightUser = (user) => {
        const lightUser = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            isAdmin: false,
        };
        localStorage.setItem("user", JSON.stringify(lightUser));
        dispatch(login(lightUser));
    };

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            // ✅ Fetch extra data from db.json
            const res = await fetch(`http://localhost:5000/users?email=${firebaseUser.email}`);
            const users = await res.json();
            const dbUser = users[0];

            const mergedUser = dbUser
                ? { ...dbUser, uid: firebaseUser.uid }
                : {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                    image: firebaseUser.photoURL || "/images/avatar.jpg",
                    isAdmin: false,
                };

            // Save locally + redux
            localStorage.setItem("user", JSON.stringify(mergedUser));
            dispatch(login(mergedUser));
            dispatch(setUserId(mergedUser.email));
            dispatch(loadUserCart(mergedUser.email));
            navigate("/");
        } catch (error) {
            alert("❌ Invalid email or password");
            console.error(error);
        }
    };

    const handleRegister = async (name, email, password, image) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
                photoURL: image || "/images/avatar.jpg",
            });

            // ✅ Also add new user to db.json
            await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    name,
                    image: image || "/images/avatar.jpg",
                    isAdmin: false,
                }),
            });

            saveLightUser(user);
            dispatch(setUserId(user.email));
            dispatch(loadUserCart(user.email));
            navigate("/");
        } catch (error) {
            alert(error.code + ": " + error.message);
            console.error(error);
        }
    };

    return { handleLogin, handleRegister };
};

export default useLogin;
