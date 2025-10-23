import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
    name: "user",
    initialState: { user: savedUser },
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
