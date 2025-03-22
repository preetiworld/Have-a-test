import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const noodles = () => {
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
          source={require("../../assets/images/mainnodl.jpg")}
          style={styles.image1}
        />
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/food/quantity",
              params: {
                name: "nood",
                price: "100",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/nodl.jpg")}
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
                nood
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
                combie
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
                name: " Amm",
                price: "260",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/manch.jpg")}
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
                Ammas
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
                noodles
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
                name: "nood ",
                price: "200$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/nodd.jpg")}
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
                nood
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
                noodle
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
                name: "noolo",
                price: "200$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/not.jpg")}
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
                noolo
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
                plain noodles
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
                name: "noodl",
                price: "300$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/past.jpg")}
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
                noodl
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
                masala noodles
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
                name: "dhabba",
                price: "100$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/manch.jpg")}
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
                noodles
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
                name: " Amma's kitchen",
                price: "100$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/nodd.jpg")}
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
                noodles
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
                name: " Indian xhin",
                price: "100$",
              },
            })
          }
        >
          <View style={styles.container3}>
            <View style={styles.container31}>
              <Image
                source={require("../../assets/images/not.jpg")}
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
                Indian xhin
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

export default noodles;

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
