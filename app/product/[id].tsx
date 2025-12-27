import { addToCart } from "@/store/cartSlice";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

export default function ProductDetail() {
  const { id, name, price, imgUrl } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const product = {
    id: String(id),
    name: String(name),
    price: Number(price),
    imgUrl: String(imgUrl),
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Product Details",
          headerTitleAlign: "center",
        }}
      />

      <Image source={{ uri: product.imgUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price}</Text>

        <Text style={styles.desc}>
          Premium quality oversized T-shirt. Soft cotton fabric, trendy design,
          perfect for daily wear.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fde2e4",
  },
  image: {
    width: "100%",
    height: 360,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b08968",
    marginVertical: 10,
  },
  desc: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#d4a373",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});