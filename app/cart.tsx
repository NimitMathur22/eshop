import { RootState } from "@/store";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/store/cartSlice";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CartScreen() {
  const items = useSelector((state: RootState) => state.cart.items);
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
              flexDirection: "row",
              padding: 15,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
            }}
          >
            {/* ✅ PRODUCT IMAGE */}
            <Image
              source={{ uri: item.imgUrl }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                marginRight: 10,
              }}
            />

            {/* ✅ PRODUCT DETAILS */}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.name}
              </Text>

              <Text style={{ marginVertical: 4 }}>₹{item.price}</Text>

              {/* ✅ QTY CONTROLS */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={qtyBtn}
                  onPress={() => dispatch(decreaseQty(item.id))}
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10 }}>{item.qty}</Text>

                <TouchableOpacity
                  style={qtyBtn}
                  onPress={() => dispatch(increaseQty(item.id))}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>

              {/* ✅ REMOVE */}
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
                style={removeBtn}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const qtyBtn = {
  paddingHorizontal: 12,
  paddingVertical: 6,
  backgroundColor: "#ddd",
  borderRadius: 5,
};

const removeBtn = {
  marginTop: 8,
  padding: 6,
  backgroundColor: "red",
  borderRadius: 5,
};
