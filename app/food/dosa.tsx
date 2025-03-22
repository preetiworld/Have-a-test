import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const dosa = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <Text style={{ fontSize: 20, margin: 10 }}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Image
          source={require("../../assets/images/dosabro.jpg")}
          style={styles.image1}
        />
      </View>

      <ScrollView>
        {/* Pass data as query parameters */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "sharma",
                price: "100$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/utappam.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text style={{ marginTop: 14, marginLeft: 17 }}>Dosa</Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              />
              <Text style={{ marginTop: 10, marginLeft: 17 }}>Uttappam</Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              />
              <Text style={{ marginTop: 10, marginLeft: 17 }}>
                Price - 100$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "Ammas Kitchen",
                price: "260$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabbro.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                Amma's kitchen
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 260$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 2 wala  */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "Dosa's",
                price: "200$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabro1.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                Dosas
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 200$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
            //{" "}
          </View>
        </TouchableOpacity>
        {/* 3rd wala*/}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "South Indian",
                price: "300$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabro2.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                south Indian
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                plain dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 200$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
        // {/* 4  wala */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "Dosa",
                price: "300$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/utappam.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                masala dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 300$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 5 wala */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "Ammas Kitchen",
                price: "100$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabro1.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                baba ka dhabba
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 100$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 6th wala */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "Ammas Kitchen",
                price: "100$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabro2.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                Amma's kitchen
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Dosa
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 100$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 7th wala */}
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "South Indian",
                price: "100$",
                image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            //{" "}
            <View style={styles.container31}>
              //{" "}
              <Image
                source={require("../../assets/images/dosabbro.jpg")}
                style={styles.image2}
              />
            </View>
            <View style={styles.container32}>
              <Text
                style={{
                  marginTop: 14,
                  marginLeft: 17,
                }}
              >
                South Indian
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Margherita
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                Price- 100$
              </Text>
              <Text
                style={{
                  height: 1,
                  backgroundColor: "black",
                  width: 200,
                  marginLeft: 17,
                }}
              ></Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default dosa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d47522",
  },
  container1: {},
  container2: {},

  image1: {
    width: "100%",
    height: 200,
  },

  container3: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    height: 120,
    borderBottomRightRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopLeftRadius: 60,
  },
  container31: {},
  container32: {},
  container33: {},
  image2: {
    height: 80,
    width: 80,
    marginLeft: 30,
    marginTop: 20,
  },
});

// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { useCart } from "../context/CartContext"; // Import Cart Context

// const DosaScreen = () => {
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const item = {
//     id: "1",
//     name: "Dosa",
//     price: 100,
//     image: require("../../assets/images/utappam.jpg"),
//     quantity,
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.container3}>
//         <Image source={item.image} style={styles.image2} />
//         <View>
//           <Text style={styles.text}>{item.name}</Text>
//           <Text style={styles.text}>Price: ${item.price}</Text>

//           {/* Quantity Controls */}
//           <View style={styles.quantityContainer}>
//             <TouchableOpacity
//               onPress={() => setQuantity(Math.max(1, quantity - 1))}
//             >
//               <Text style={styles.quantityButton}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantity}>{quantity}</Text>
//             <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
//               <Text style={styles.quantityButton}>+</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Add to Cart Button */}
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => addToCart(item)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default DosaScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#d47522", padding: 20 },
//   container3: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     padding: 15,
//     borderRadius: 10,
//   },
//   image2: { width: 80, height: 80, marginRight: 15 },
//   text: { fontSize: 18, marginBottom: 5 },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   quantityButton: {
//     fontSize: 24,
//     paddingHorizontal: 10,
//     backgroundColor: "#ddd",
//     marginHorizontal: 5,
//   },
//   quantity: { fontSize: 18 },
//   addToCartButton: {
//     backgroundColor: "green",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   addToCartText: { color: "white", fontSize: 16, textAlign: "center" },
// });
