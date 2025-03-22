import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { CartContext } from "../context/CartContext";

const QuantityScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Ensure the values are strings and numbers
  const name = typeof params.name === "string" ? params.name : "";
  const price = typeof params.price === "string" ? parseFloat(params.price) : 0;
  const image = typeof params.image === "string" ? params.image : "";
  const description =
    typeof params.description === "string" ? params.description : "";

  const { addToCart } = useContext(CartContext) || {};

  const [quant, setQuant] = useState(1);

  const IncreaseQuantityHandler = () => setQuant((prev) => prev + 1);
  const DecreaseQuantityHandler = () =>
    setQuant((prev) => Math.max(prev - 1, 1)); // Ensure it doesn't go below 1

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({ name, price, quantity: quant });
      router.push("/(tabs)/cart"); // Navigate to cart screen
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#d47522" }}>
      <ScrollView>
        {/* Close Button */}
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <Text style={{ fontSize: 20, margin: 10 }}>Close</Text>
        </TouchableOpacity>

        {/* Product Image */}
        <View>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 240 }}
          />
        </View>

        {/* Product Details */}
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 25, marginBottom: 5 }}>{name}</Text>
          <Text style={{ fontSize: 20, color: "#FF3F00", marginBottom: 10 }}>
            ₹{price.toFixed(2)}
          </Text>
          <Text style={{ color: "gray", marginBottom: 15 }}>{description}</Text>

          {/* Quantity Controls */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <TouchableOpacity onPress={DecreaseQuantityHandler}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: "#FF3F00",
                  color: "white",
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </TouchableOpacity>

            <TextInput
              style={{
                fontSize: 20,
                padding: 10,
                width: 50,
                textAlign: "center",
                backgroundColor: "#f8f8f8",
                marginHorizontal: 10,
              }}
              value={quant.toString()}
              editable={false}
            />

            <TouchableOpacity onPress={IncreaseQuantityHandler}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  backgroundColor: "#FF3F00",
                  color: "white",
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity onPress={handleAddToCart}>
            <View
              style={{
                backgroundColor: "red",
                padding: 15,
                alignItems: "center",
                marginTop: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default QuantityScreen;
