import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

// Fetch all products
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axios.get(`${API}/api/products`);
        return res.data;
    }
);

// Fetch single product + its reviews
// Fetch single product + its reviews
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id) => {
        const [productRes, reviewsRes] = await Promise.all([
            axios.get(`${API}/api/products?id=${id}`),
            axios.get(`${API}/api/reviews?productId=${id}`)
        ]);

        const product = productRes.data[0]; // <-- get the first match
        if (!product) throw new Error("Product not found");

        return {
            ...product,
            reviews: reviewsRes.data || [],
        };
    }
);



// Fetch all collections
export const fetchCollections = createAsyncThunk(
    "products/fetchCollections",
    async () => {
        const res = await axios.get(`${API}/api/collections`);
        return res.data;
    }
);

// Fetch blog posts
export const fetchBlogs = createAsyncThunk(
    "products/fetchBlogs",
    async () => {
        const res = await axios.get(`${API}/api/blog`);
        return res.data;
    }
);

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
            state.filtered = state.items.filter(
                (item) => item.category === action.payload
            );
        },
        filterByNewArrivals: (state) => {
            state.newArrivals = state.items.filter((item) => item.isNew);
        },
        filterByBestSellers: (state) => {
            state.bestSellers = state.items.filter((item) => item.isBestSeller);
        },
    },
    extraReducers: (builder) => {
        builder
            // 🔹 Fetch all products
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload || [];
                state.newArrivals = state.items.filter((p) => p.isNew);
                state.bestSellers = state.items.filter((p) => p.isBestSeller);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // 🔹 Fetch single product by ID
            .addCase(fetchProductById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action.payload || null;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // 🔹 Fetch collections
            .addCase(fetchCollections.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.collections = Array.isArray(action.payload)
                    ? action.payload
                    : [action.payload];
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // 🔹 Fetch blog posts
            .addCase(fetchBlogs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.blog = Array.isArray(action.payload)
                    ? action.payload
                    : [action.payload];
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { filterByCategory, filterByNewArrivals, filterByBestSellers } =
    productsSlice.actions;
export default productsSlice.reducer;
