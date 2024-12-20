 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 const initialState = {
  data: {
    products: [],
    categories: [],
    category: "",
  },
  isLoading: true,
  error: null,
};

const BASE_URL = "https://fakestoreapi.com/products";

export const getData = createAsyncThunk(
  "products/getData",
  async (param = "", thunkAPI) => {
    try {
      const url = `${BASE_URL}/${param}`.trim(); 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data.products = action.payload;
    
    },
   },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
         state.data.products = action.payload;
         state.data.categories = []; 
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;  
      });
  },
});

export const { setProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;
