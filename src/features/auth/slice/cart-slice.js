import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as cartService from "../../../api/cart-api";

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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
        state.error = null;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
