import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/users";
export const loadUserCart = createAsyncThunk(
    "cart/loadUserCart",
    async (userEmail) => {
        const res = await fetch(`${API_URL}?email=${userEmail}`);
        const users = await res.json();
        return users[0]?.cart || { products: [], totalQuantity: 0, totalPrice: 0 };
    }
);
export const saveUserCart = createAsyncThunk(
    "cart/saveUserCart",
    async ({ userEmail, cart }) => {
        const res = await fetch(`${API_URL}?email=${userEmail}`);
        const users = await res.json();
        const user = users[0];
        if (!user) throw new Error("User not found");
        await fetch(`${API_URL}/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart }),
        });
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: { products: [], totalQuantity: 0, totalPrice: 0, userId: null },
    reducers: {
        setUserId(state, action) {
            state.userId = action.payload;
        },
        addToCart(state, action) {
            const item = action.payload;
            const existing = state.products.find((i) => i.id === item.id);
            if (existing) {
                existing.quantity++;
                existing.totalPrice += item.price;
            } else {
                state.products.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    image: item.image || (item.images && item.images[0]),
                });
            }
            state.totalQuantity++;
            state.totalPrice += item.price;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existing = state.products.find((i) => i.id === id);
            if (existing) {
                state.products = state.products.filter((i) => i.id !== id);
                state.totalQuantity -= existing.quantity;
                state.totalPrice -= existing.price * existing.quantity;
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const item = state.products.find((i) => i.id === id);
            if (item) {
                item.quantity++;
                item.totalPrice += item.price;
                state.totalQuantity++;
                state.totalPrice += item.price;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const item = state.products.find((i) => i.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
                item.totalPrice -= item.price;
                state.totalQuantity--;
                state.totalPrice -= item.price;
            }
        },
        clearCart(state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUserCart.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalPrice = action.payload.totalPrice;
            });
    },
});

export const {
    setUserId,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
