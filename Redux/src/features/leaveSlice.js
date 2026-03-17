import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("leaves");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
};

const saveToLocalStorage = (data) => {
    try {
        localStorage.setItem("leaves", JSON.stringify(data));
    } catch (error) {
        console.error("LocalStorage Error:", error);
    }
};


export const applyLeaveAsync = createAsyncThunk(
    "leaves/applyLeaveAsync",
    async (leaveData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ...leaveData,
                    id: uuidv4(),
                    status: "Pending",
                    appliedDate: new Date().toLocaleDateString(),
                });
            }, 1000);
        });
    }
);

const leaveSlice = createSlice({
    name: "leaves",

    initialState: {
        leaveList: loadFromLocalStorage(),
        loading: false,
        error: null,
        search: "",
        filterStatus: "All",
    },

    reducers: {

        deleteLeave: (state, action) => {
            state.leaveList = state.leaveList.filter(
                (leave) => leave.id !== action.payload
            );

            saveToLocalStorage(state.leaveList);
        },

        updateLeave: (state, action) => {
            const index = state.leaveList.findIndex(
                (leave) => leave.id === action.payload.id
            );

            if (index !== -1) {
                state.leaveList[index] = action.payload;
            }

            saveToLocalStorage(state.leaveList);
        },

        updateStatus: (state, action) => {
            const leave = state.leaveList.find(
                (leave) => leave.id === action.payload.id
            );

            if (leave) {
                leave.status = action.payload.status;
            }

            saveToLocalStorage(state.leaveList);
        },

        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setFilterStatus: (state, action) => {
            state.filterStatus = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(applyLeaveAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(applyLeaveAsync.fulfilled, (state, action) => {
                state.loading = false;

                state.leaveList.push(action.payload);

                saveToLocalStorage(state.leaveList);
            })

            .addCase(applyLeaveAsync.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to apply leave";
            });
    },
});

export const {
    deleteLeave,
    updateLeave,
    updateStatus,
    setSearch,
    setFilterStatus,
} = leaveSlice.actions;

export default leaveSlice.reducer;