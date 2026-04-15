import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage, db } from "../firebase/firebaseConfig";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { ref, push, get, remove, update } from "firebase/database";

// 📤 Upload File
export const uploadFile = createAsyncThunk(
    "files/uploadFile",
    async ({ file, category }, thunkAPI) => {
        try {
            const fileRef = storageRef(storage, `documents/${file.name}`);
            await uploadBytes(fileRef, file);
            const url = await getDownloadURL(fileRef);

            const fileData = {
                name: file.name,
                type: file.type,
                size: file.size,
                category,
                url,
                createdAt: new Date().toISOString(),
            };

            await push(ref(db, "files"), fileData);
            return fileData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// 📥 Fetch Files
export const fetchFiles = createAsyncThunk(
    "files/fetchFiles",
    async (_, thunkAPI) => {
        try {
            const snapshot = await get(ref(db, "files"));
            let data = [];
            snapshot.forEach((child) => {
                data.push({ id: child.key, ...child.val() });
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// ❌ Delete File
export const deleteFile = createAsyncThunk(
    "files/deleteFile",
    async ({ id, name }, thunkAPI) => {
        try {
            await deleteObject(storageRef(storage, `documents/${name}`));
            await remove(ref(db, `files/${id}`));
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// ✏️ Update Metadata
export const updateFileMetadata = createAsyncThunk(
    "files/updateFileMetadata",
    async ({ id, updates }, thunkAPI) => {
        try {
            await update(ref(db, `files/${id}`), updates);
            return { id, updates };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const fileSlice = createSlice({
    name: "files",
    initialState: {
        files: [],
        loading: false,
        error: null,
        search: "",
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Upload
            .addCase(uploadFile.pending, (state) => {
                state.loading = true;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.loading = false;
                state.files.push(action.payload);
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Fetch
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.files = action.payload;
            })

            // Delete
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.files = state.files.filter(f => f.id !== action.payload);
            })

            // Update
            .addCase(updateFileMetadata.fulfilled, (state, action) => {
                const index = state.files.findIndex(f => f.id === action.payload.id);
                if (index !== -1) {
                    state.files[index] = {
                        ...state.files[index],
                        ...action.payload.updates,
                    };
                }
            });
    },
});

export const { setSearch } = fileSlice.actions;
export default fileSlice.reducer;