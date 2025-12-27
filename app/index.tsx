import ProductCard from "@/components/ProductCard";
import { ThemedView } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function Home() {
  const navigation = useNavigation();
  const router = useRouter();

  // Get total quantity from Redux
  const totalQty = useSelector((state: any) =>
    state.cart.items.reduce((sum: number, item: any) => sum + item.qty, 0)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => router.push("/cart")}
        >
          <View>
            <Ionicons name="cart" size={28} color="#112A46" />
            {totalQty > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{totalQty}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, totalQty]);

  const products = [
    { id: "1", name: "Oversized White T-Shirt", price: 800, imgUrl: "https://m.media-amazon.com/images/I/41F2okw0CkL._SY500_.jpg" },
    { id: "2", name: "LEOTUDE Men's Oversized Cottonblend T-Shirt", price: 600, imgUrl: "https://m.media-amazon.com/images/I/71TPaxOCA-L._SY679_.jpg" },
    { id: "3", name: "Black Men's T-Shirt", price: 1200, imgUrl: "https://m.media-amazon.com/images/I/61Y-Wo2tDIL._SY550_.jpg" },
    { id: "4", name: "Hills Men's Fit T-Shirt", price: 900, imgUrl: "https://m.media-amazon.com/images/I/71stJQtvHGL._SX679_.jpg  " },
  ];

  return (
    <ThemedView style={{ flex: 1, padding: 10, backgroundColor: "#FDFDFD" }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    // right: -6,
    // top: -6,
    backgroundColor: "red",
    borderRadius: 8,
    minWidth: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
