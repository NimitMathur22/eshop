import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "qty">>) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      else state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
