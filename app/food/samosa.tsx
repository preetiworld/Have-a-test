import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const samosa = () => {
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
          source={require("../../assets/images/samosabro.jpg")}
          style={styles.image1}
        />
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "osaHut",
                price: "200$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/samosabro.jpg")}
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
                samosa Hut
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
                choota samosa
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "samosa",
                price: "260$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/saaamosabro.jpg")}
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
                samosa
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
                Accha samosa
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: " desi kit",
                price: "200$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/saaamosabro.jpg")}
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
                desi kitchen
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
                Jalpinnos
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "samosa",
                price: "200$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/saaamosabro.jpg")}
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
                samosa
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
                samosa
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "lar sam",
                price: "300$",
                // image: "../../assets/images/utappam.jpg",
                description: "Crispy South Indian delight",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/saaamosabro.jpg")}
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
                Ammas Kitchen
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
                larva samosa
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

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "samosa",
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
                source={require("../../assets/images/saaamosabro.jpg")}
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
                samosa Hut
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
                Cheese samosa
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
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "sam hut",
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
                source={require("../../assets/images/saaamosabro.jpg")}
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
                lappinos Hut
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

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "sam Hut",
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
                source={require("../../assets/images/saaamosabro.jpg")}
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
                samosa Hut
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

export default samosa;

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
