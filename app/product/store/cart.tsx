import { ThemedText, ThemedView } from "@/components/Themed";
import { useCartStore } from "@/store/cartStore";
import React from "react";
import { Button, FlatList } from "react-native";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      <ThemedText style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>
        Your Cart
      </ThemedText>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedText
            style={{
              padding: 10,
              marginVertical: 5,
              backgroundColor: "#ddd",
              borderRadius: 8,
            }}
          >
            {item.name} - ₹{item.price}
            {"  "}
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </ThemedText>
        )}
      />

      {items.length > 0 && (
        <Button title="Clear Cart" onPress={clearCart} />
      )}
    </ThemedView>
  );
}
