const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  status: "idle",
  productsData: [],
  cartData: [],
  count: 1,
};

const crudSlice = createSlice({
  name: "crudSlice",
  initialState,
  reducers: {
    addToCartButton: (state, { payload }) => {
      let found = state.cartData.some((item) => item.id === payload.id);

      if (!found) {
        state.cartData = [
          ...state.cartData,
          { ...payload, count: state.count },
        ];
      } else {
        // let ind = state.cartData.findIndex((i) => i.id === payload.id);
        // state.cartData[ind].count = state.cartData[ind].count + 1;

        state.cartData = state.cartData.map((item) => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      }
    },

    deleteCart: (state, { payload }) => {
      state.cartData = state.cartData.filter((item) => item.id !== payload);
    },

    incrementCartCount: (state, { payload }) => {
      state.cartData = state.cartData.map((item) => {
        if (item.id === payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    },

    decrementCartCount: (state, { payload }) => {
      state.cartData = state.cartData.map((item) => {
        if (item.count > 1) {
          if (item.id === payload.id) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.productsData = action.payload;
      })
      .addCase(productThunk.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const productThunk = createAsyncThunk("/productsData", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json();
  return data;
});

export const {
  addToCartButton,
  deleteCart,
  decrementCartCount,
  incrementCartCount,
} = crudSlice.actions;
export default crudSlice.reducer;
