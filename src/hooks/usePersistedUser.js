import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { loadUserCart } from "../store/cartSlice";

export const usePersistedUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (!localUser) return;

        const parsedUser = JSON.parse(localUser);
        dispatch(login(parsedUser));
        dispatch(loadUserCart(parsedUser.email));
    }, [dispatch]);
};
