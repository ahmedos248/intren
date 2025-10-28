import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
    addToCart as addToCartAction,
    removeFromCart as removeFromCartAction,
    increaseQuantity as increaseQuantityAction,
    decreaseQuantity as decreaseQuantityAction,
    clearCart as clearCartAction,
    saveUserCart,
    loadUserCart,
    setUserId,
} from "../store/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user.user);

    // Skip saving on first render
    const isFirstRender = useRef(true);

    // ✅ Load cart from server when user logs in
    useEffect(() => {
        if (user?.email) {
            dispatch(setUserId(user.email));
            dispatch(loadUserCart(user.email));
        }
    }, [user, dispatch]);

    // ✅ Auto-save cart when it changes (if logged in)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (cart.userId) {
            dispatch(saveUserCart({ userEmail: cart.userId, cart }));
        } else {
            localStorage.setItem("guestCart", JSON.stringify(cart));
        }
    }, [cart, dispatch]);

    // ✅ Load localStorage cart for guest users
    useEffect(() => {
        if (!user?.email) {
            const saved = localStorage.getItem("guestCart");
            if (saved) {
                const parsed = JSON.parse(saved);
                parsed.products?.forEach((p) => dispatch(addToCartAction(p)));
            }
        }
    }, [user, dispatch]);

    const addToCart = (product) => dispatch(addToCartAction(product));
    const removeFromCart = (productId) => dispatch(removeFromCartAction(productId));
    const increaseQuantity = (productId) => dispatch(increaseQuantityAction(productId));
    const decreaseQuantity = (productId) => dispatch(decreaseQuantityAction(productId));
    const clearCart = () => dispatch(clearCartAction());

    return {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    };
};
