import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "./apiService";

export const fetchApi = createAsyncThunk(
  "api/fetchApi",
  async ({ url, method, body }, { rejectWithValue }) => {
    try {
      const res = await fetchRequest(url, method, body);

      return {
        data: res.data,
        status: res.status,
        method,
        url,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);