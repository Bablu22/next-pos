import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  id: number | undefined;
  name: string;
  price: number;
  quantity: number;
}

export interface ICartState {
  products: IProduct[];
}

const initialState: ICartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
