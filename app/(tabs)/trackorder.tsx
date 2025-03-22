import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const trackorder = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <Text style={{ fontSize: 17, margin: 10 }}>Close</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
        }}
      >
        MY Orders
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 10,
          color: "white",
        }}
      >
        Order id: 4455545ad
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        Time : 4:10 AM
      </Text>

      <TouchableOpacity onPress={() => router.push("/food/quantity")}>
        <View style={styles.container3}>
          <View style={styles.container31}>
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
              uttappam
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

      <TouchableOpacity onPress={() => router.push("/food/quantity")}>
        <View style={styles.container3}>
          <View style={styles.container31}>
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
              uttappam
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

      <TouchableOpacity onPress={() => router.push("/food/quantity")}>
        <View style={styles.container3}>
          <View style={styles.container31}>
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
              uttappam
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
    </View>
  );
};

export default trackorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d47522",
  },
  container1: {},
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
  image2: {
    height: 80,
    width: 80,
    marginLeft: 30,
    marginTop: 20,
  },
});
