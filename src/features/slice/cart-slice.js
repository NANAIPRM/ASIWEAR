import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as cartService from "../../api/cart-api";

const initialState = {
  carts: [],
  loading: false,
  error: null,
};

export const createCart = createAsyncThunk(
  "cart/createCart",
  async ({ id, input }, thunkApi) => {
    try {
      await cartService.createCart(id, input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getAllCartByUserId = createAsyncThunk(
  "cart/allcart",
  async (_, thunkApi) => {
    try {
      const res = await cartService.getAllCartByUserId();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async (id, thunkApi) => {
    try {
      await cartService.deleteCartItem(id);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/update",
  async ({ id, input }, thunkApi) => {
    try {
      await cartService.updateCartItem(id, input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCartByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(getAllCartByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
