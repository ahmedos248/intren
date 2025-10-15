import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000";

// Thunks
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await axios.get(`${API}/products`);
    return res.data;
});

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
    const res = await axios.get(`${API}/products/${id}`);
    return res.data;
});

export const fetchCollections = createAsyncThunk("products/fetchCollections", async () => {
    const res = await axios.get(`${API}/collections`);
    return res.data;
});

export const fetchBlogs = createAsyncThunk("products/fetchBlogs", async () => {
    const res = await axios.get(`${API}/blog`);
    return res.data;
});

// Slice
const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        filtered: [],
        product: null,
        newArrivals: [],
        bestSellers: [],
        collections: [],
        blog: [],
        status: "idle",
        error: null,
    },

    reducers: {
        filterByCategory: (state, action) => {
            state.filtered = state.items.filter(item => item.category === action.payload);
        },
        filterByNewArrivals: (state) => {
            state.newArrivals = state.items.filter(item => item.isNew);
        },
        filterByBestSellers: (state) => {
            state.bestSellers = state.items.filter(item => item.isBestSeller);
        },
    },

    extraReducers: (builder) => {
        builder
            // Fetch Products
            .addCase(fetchProducts.pending, (s) => { s.status = "loading"; })
            .addCase(fetchProducts.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.items = a.payload;
                s.newArrivals = a.payload.filter(p => p.isNew);
                s.bestSellers = a.payload.filter(p => p.isBestSeller);
            })
            .addCase(fetchProducts.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // Fetch Collections
            .addCase(fetchCollections.pending, (s) => { s.status = "loading"; })
            .addCase(fetchCollections.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.collections = Array.isArray(a.payload) ? a.payload : [a.payload];
            })
            .addCase(fetchCollections.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // Fetch Product By ID
            .addCase(fetchProductById.pending, (s) => { s.status = "loading"; })
            .addCase(fetchProductById.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.product = a.payload;
            })
            .addCase(fetchProductById.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // Fetch Blogs
            .addCase(fetchBlogs.pending, (s) => { s.status = "loading"; })
            .addCase(fetchBlogs.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.blog = Array.isArray(a.payload) ? a.payload : [a.payload];
            })
            .addCase(fetchBlogs.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            });
    },
});

export const { filterByCategory, filterByNewArrivals, filterByBestSellers } = productsSlice.actions;
export default productsSlice.reducer;
