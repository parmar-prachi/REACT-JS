import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase"; 
import { ref, push, set, get, update, remove } from "firebase/database";


// FETCH PRODUCTS
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const snapshot = await get(ref(db, "products"));

            if (!snapshot.exists()) {
                return [];
            }

            const data = snapshot.val();

            return Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// ADD PRODUCT
export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (product, { rejectWithValue }) => {
        try {
            console.log("Attempting to save:", product);
            const newRef = push(ref(db, "products"));
            await set(newRef, product);
            console.log("Saved successfully!");

            return { id: newRef.key, ...product };
        } catch (error) {
            console.error("Firebase Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);


// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            await update(ref(db, `products/${id}`), updatedData);
            return { id, updatedData };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id, { rejectWithValue }) => {
        try {
            await remove(ref(db, `products/${id}`));
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// SLICE
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false, 
        error: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
       
        builder
            .addCase(addProduct.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;