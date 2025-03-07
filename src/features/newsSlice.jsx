import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("getNews", async () => {
  const API = import.meta.env.VITE_API_KEY;
  const viteUrl = import.meta.env.VITE_API_URL;

  const URL = `${viteUrl}${API}`;
  const { data } = await axios(URL);
  console.log(data);
  return data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newsData = payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNewsData } = newsSlice.actions;
export default newsSlice.reducer;
