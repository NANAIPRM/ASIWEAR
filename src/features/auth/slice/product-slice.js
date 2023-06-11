import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../../../api/product-api";
import { getAccessToken } from "../../../utils/localstorage";
getAccessToken;
const initialState = {
  products: [],
  productItem: [],
  loading: false,
  error: null,
};

// get all product ครับ ควย
export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (input, thunkApi) => {
    try {
      const res = await productService.getAllProducts();
      return res.data.products;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addProducts = createAsyncThunk(
  "product/addProduct",
  async (input, thunkApi) => {
    try {
      await productService.addProduct(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const removeProductById = createAsyncThunk(
  "product/removeProductById",
  async (id, thunkApi) => {
    try {
      await productService.deleteProductById(id);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, thunkApi) => {
    try {
      const res = await productService.getProductById(id);
      return res.data.product;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const editProductById = createAsyncThunk(
  "product/editProductById",
  async ({ id, input }, thunkApi) => {
    try {
      await productService.editProductById(id, input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct(state) {
      state.products = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProducts.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productItem = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productItem = action.payload; // Update the product item with the response data
      })
      .addCase(editProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const { updateProduct } = productSlice.actions;
