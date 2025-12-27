// // store/cartStore.ts
// import { create } from "zustand";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   clearCart: () => void;
// }

// export const useCartStore = create<CartState>((set) => ({
//   items: [],
//   addItem: (item) =>
//     set((state) => {
//       // Check if item already exists
//       const existing = state.items.find((i) => i.id === item.id);
//       if (existing) {
//         return {
//           items: state.items.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       }
//       return { items: [...state.items, { ...item, quantity: 1 }] };
//     }),
//   removeItem: (id) =>
//     set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
//   clearCart: () => set({ items: [] }),
// }));
// store/cartStore.ts
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),
}));
