import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000";

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await axios.get(`${API}/products`);
    return res.data;
});

// Fetch single product + its reviews
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id) => {
        const [productRes, reviewsRes] = await Promise.all([
            axios.get(`${API}/products/${id}`),
            axios.get(`${API}/reviews?productId=${id}`)
        ]);

        if (!productRes.data) throw new Error("Product not found");

        return {
            ...productRes.data,
            reviews: reviewsRes.data || [],
        };
    }
);


// Fetch all collections
export const fetchCollections = createAsyncThunk("products/fetchCollections", async () => {
    const res = await axios.get(`${API}/collections`);
    return res.data;
});

// Fetch blog posts
export const fetchBlogs = createAsyncThunk("products/fetchBlogs", async () => {
    const res = await axios.get(`${API}/blog`);
    return res.data;
});

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
            // 🔹 Fetch all products
            .addCase(fetchProducts.pending, (s) => {
                s.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.items = a.payload || [];
                s.newArrivals = s.items.filter(p => p.isNew);
                s.bestSellers = s.items.filter(p => p.isBestSeller);
            })
            .addCase(fetchProducts.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // 🔹 Fetch single product by ID
            .addCase(fetchProductById.pending, (s) => {
                s.status = "loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action.payload || null;
            })


            .addCase(fetchProductById.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // 🔹 Fetch collections
            .addCase(fetchCollections.pending, (s) => {
                s.status = "loading";
            })
            .addCase(fetchCollections.fulfilled, (s, a) => {
                s.status = "succeeded";
                s.collections = Array.isArray(a.payload) ? a.payload : [a.payload];
            })
            .addCase(fetchCollections.rejected, (s, a) => {
                s.status = "failed";
                s.error = a.error.message;
            })

            // 🔹 Fetch blog posts
            .addCase(fetchBlogs.pending, (s) => {
                s.status = "loading";
            })
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
