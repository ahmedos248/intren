import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
    addToCart as addToCartAction,
    removeFromCart as removeFromCartAction,
    increaseQuantity as increaseQuantityAction,
    decreaseQuantity as decreaseQuantityAction,
    clearCart as clearCartAction,
    saveUserCart,
} from "../store/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // Skip saving on first render
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        // Only save if user is logged in
        if (cart.userId) {
            dispatch(saveUserCart({ userEmail: cart.userId, cart }));
        }
    }, [cart, dispatch]);

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
