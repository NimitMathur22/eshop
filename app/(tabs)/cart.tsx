// app/(tabs)/cart.tsx
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../product/store/cartSlice";

export default function CartScreen() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <ScrollView style={{ padding: 20 }}>
      {items.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        items.map((item) => (
          <View
            key={item.id}
            style={{
              padding: 15,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.title}</Text>
            <Text style={{ marginVertical: 5 }}>₹{item.price}</Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#ddd",
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => dispatch(decreaseQty(item.id))}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={{ paddingTop: 10 }}>{item.qty}</Text>

              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#ddd",
                  borderRadius: 5,
                  marginLeft: 10,
                }}
                onPress={() => dispatch(increaseQty(item.id))}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(item.id))}
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: "red",
                borderRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
}
