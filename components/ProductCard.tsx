import { addToCart } from "@/store/cartSlice";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";

type Product = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  const openDetails = () => {
    router.push({
      pathname: "/product/[id]",
      params: {
        id: product.id,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={openDetails}>
      <Image source={{ uri: product.imgUrl }} style={styles.image} />

      <Text style={styles.title} numberOfLines={2}>
        {product.name}
      </Text>

      <Text style={styles.price}>₹{product.price}</Text>

      {/* Stop parent click */}
      <TouchableOpacity
        style={styles.button}
        onPress={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  image: {
    height: 160,
    borderRadius: 14,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 6,
    color: "#b08968",
  },
  button: {
    backgroundColor: "#d4a373",
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
