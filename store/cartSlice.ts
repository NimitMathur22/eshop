import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** Product shape used across app */
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  qty: number;
}

interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /** ADD TO CART */
    addToCart: (
      state,
      action: PayloadAction<Omit<CartProduct, "qty">>
    ) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    /** INCREASE QTY */
    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },

    /** DECREASE QTY */
    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    /** REMOVE ITEM */
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    /** CLEAR CART */
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
