import React, { useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext) || {
    cart: [],
    removeFromCart: () => {},
  };

  const DELIVERY_CHARGE = cart.length > 0 ? 30 : 0;
  const GST_RATE = 0.18;

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const gstAmount = totalAmount * GST_RATE;

  const grandTotal = totalAmount + gstAmount + DELIVERY_CHARGE;

  return (
    <View style={{ flex: 1, backgroundColor: "#d47522", padding: 20 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
          color: "white",
        }}
      >
        Your Cart
      </Text>

      <ScrollView style={{ flex: 1 }}>
        {cart.length === 0 ? (
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Cart is empty
          </Text>
        ) : (
          cart.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "white",
                padding: 15,
                marginVertical: 10,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 16, color: "#333" }}>
                ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
              </Text>

              <TouchableOpacity
                onPress={() => removeFromCart(item.name)}
                style={{
                  marginTop: 10,
                  backgroundColor: "#FF3F00",
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Total Summary & Buy Button */}
      {cart.length > 0 && (
        <View
          style={{
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            Subtotal: ₹{totalAmount.toFixed(2)}
          </Text>
          <Text style={{ fontSize: 16, color: "#555" }}>
            GST (18%): ₹{gstAmount.toFixed(2)}
          </Text>
          <Text style={{ fontSize: 16, color: "#555" }}>
            Delivery Charges: ₹{DELIVERY_CHARGE}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#333",
              marginTop: 10,
            }}
          >
            Grand Total: ₹{grandTotal.toFixed(2)}
          </Text>

          <TouchableOpacity
            onPress={() =>
              alert(`Proceeding to buy for ₹${grandTotal.toFixed(2)}`)
            }
            style={{
              marginTop: 10,
              backgroundColor: "#FF3F00",

              padding: 15,
              borderRadius: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
