import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Order {
  item: Product;
  qty: number;
}

export interface storeState {
  stores: Product[];
  storesStatic: Product[];
  isLoading: boolean;
  category: string;
  cart: Order[];
}

const initialState: storeState = {
  stores: [],
  storesStatic: [],
  isLoading: false,
  category: "All",
  cart: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    filtersCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      if (action.payload === "All") {
        state.stores = state.storesStatic;
      } else {
        state.stores = state.storesStatic.filter(
          (item) => item.category === action.payload.toLowerCase()
        );
      }
    },
    sortProduct: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "price":
          state.stores = state.stores.sort((a, b) => a.price - b.price);
          break;
      }
    },
    newOrderToCart: (state, action: PayloadAction<Order>) => {
      const { item, qty } = action.payload;
      const orderToEditIndex = state.cart.findIndex(
        (order) => order.item.id === item.id
      );
      if (orderToEditIndex === -1) {
        state.cart.push({ item, qty });
      }else{
        state.cart[orderToEditIndex].qty += qty;
      }
    },
    increaseOrderInCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const orderToEditIndex = state.cart.findIndex(
        (order) => order.item.id === action.payload.productId
      );
      state.cart[orderToEditIndex].qty += 1;
    },
    decreaseOrderInCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const orderToEditIndex = state.cart.findIndex(
        (order) => order.item.id === action.payload.productId
      );
      if (state.cart[orderToEditIndex].qty - 1 === 0) {
        state.cart = state.cart.filter(
          (order) => order.item.id !== action.payload.productId
        );
      } else {
        state.cart[orderToEditIndex].qty -= 1;
      }
    },
    deleteOrderInCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.cart = state.cart.filter(
        (order) => order.item.id !== action.payload.productId
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPrdocuts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllPrdocuts.fulfilled, (state, actions) => {
      state.stores = actions.payload;
      state.storesStatic = actions.payload;
      state.isLoading = false;
    });
  },
});

export const fetchAllPrdocuts = createAsyncThunk(
  "store/fetchAllPrdocuts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

// eslint-disable-next-line no-empty-pattern
export const {
  filtersCategory,
  sortProduct,
  newOrderToCart,
  increaseOrderInCart,
  decreaseOrderInCart,
  deleteOrderInCart
} = storeSlice.actions;
export const storeSelector = (store: RootState) => store.store;
export default storeSlice.reducer;
