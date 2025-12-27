import { View } from "react-native";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  { id: 1, title: "Shoes", price: 2000, image: "https://picsum.photos/300" },
  { id: 2, title: "Bag", price: 1500, image: "https://picsum.photos/301" },
  { id: 3, title: "Watch", price: 3500, image: "https://picsum.photos/302" },
];

export default function ProductList() {
  return (
    <View>
      {PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </View>
  );
}
