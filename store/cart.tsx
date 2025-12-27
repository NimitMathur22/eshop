// import { create } from "zustand";

// type Product = {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
// };

// type CartState = {
//   items: Product[];
//   add: (item: Product) => void;
//   remove: (id: number) => void;
// };

// export const useCart = create<CartState>((set) => ({
//   items: [],
//   add: (item) => set((s) => ({ items: [...s.items, item] })),
//   remove: (id) => set((s) => ({ items: s.items.filter((i) => i?.id !== id) })),
// }));

// app/cart.tsx
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "./cartSlice";

export default function CartScreen() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  // -------------------------
  // EMPTY CART UI
  // -------------------------
  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>🛒 Your Cart is Empty</Text>

        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.goHome}>Go Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // -------------------------
  // RENDER SINGLE ITEM
  // -------------------------
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))}>
            <Text style={styles.btn}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{item.qty}</Text>

          <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => dispatch(removeFromCart(item.id))}
        >
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

}


// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Empty Cart
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 22,
    color: "#555",
    marginBottom: 10,
  },
  goHome: {
    fontSize: 18,
    color: "blue",
    marginTop: 10,
  },

  // Product Cards
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
    color: "#444",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyBtn: {
    backgroundColor: "#ddd",
    width: 35,
    height: 35,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  qty: {
    fontSize: 20,
    marginHorizontal: 12,
    width: 30,
    textAlign: "center",
  },

  remove: {
    marginTop: 8,
    color: "red",
    fontSize: 16,
  },

  // Bottom Total Bar
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkoutBtn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
  },
});

