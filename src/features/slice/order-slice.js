import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as orderService from "../../api/order-api";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (input, thunkApi) => {
    try {
      await orderService.createOrder(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getAllOrder = createAsyncThunk(
  "order/allOrder",
  async (_, thunkApi) => {
    try {
      const res = await orderService.getAllOrder();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "order/updateStatus",
  async (id, thunkApi) => {
    try {
      await orderService.UpdateStatus(id);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getAllOrderByUserId = createAsyncThunk(
  "order/getAllOrderByUserId",
  async (_, thunkApi) => {
    try {
      const res = await orderService.getAllOrderByUserId();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getOrderByOrderId = createAsyncThunk(
  "order/getOrderByOrderId",
  async (id, thunkApi) => {
    try {
      const res = await orderService.getOrderByOrderId(id);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getAllOrderByUserId.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(getOrderByOrderId.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default orderSlice.reducer;
