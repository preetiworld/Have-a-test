import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Swiper from "react-native-swiper";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as Location from "expo-location";

const Home = () => {
  const router = useRouter();

  const [locationName, setLocationName] = useState<string | null>(null);
  const [pincode, setPincode] = useState<string | null>(null);
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    getLocation();
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // Ensure we handle cases where getLocationName returns null
      const locationData = await getLocationName(latitude, longitude);
      if (locationData) {
        setLocationName(locationData.name);
        setPincode(locationData.pin);
        console.log("Location:", locationData.name);
        console.log("Pincode:", locationData.pin);
      }
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  const getLocationName = async (latitude: number, longitude: number) => {
    try {
      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (geocode.length > 0) {
        const { city, country, postalCode } = geocode[0];
        return { name: `${city}, ${country}`, pin: postalCode ?? "N/A" };
      }
    } catch (error) {
      console.log("Error fetching location name:", error);
    }

    return { name: "Unknown Location", pin: "N/A" }; // Always return an object
  };

  return (
    <View style={styles.container00}>
      <StatusBar barStyle="light-content" backgroundColor="#d47522" />
      <ScrollView>
        <View style={styles.container01}>
          <View style={styles.container02}>
            <Ionicons name="location" size={24} color="black" />
          </View>
          <Text style={styles.container03}>Location</Text>
          <Text style={styles.container04}>
            {locationName || "Fetching location..."}, {pincode || "pincode"}
          </Text>
        </View>

        <View style={styles.container4}>
          <View style={styles.container5}>
            <View style={styles.container55}>
              <SimpleLineIcons name="magnifier" size={24} color="black" />
            </View>
          </View>
          <TextInput style={styles.input} placeholder="Search you favorite" />
        </View>
        <Text style={styles.container6}>Catagories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/pizza.png")}
              style={styles.image}
            />

            <Text>pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/ice-cream-cup.png")}
              style={styles.image}
            />

            <Text>ice cream</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/soda.png")}
              style={styles.image}
            />

            <Text>cold-drinks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/masala-dosa.png")}
              style={styles.image}
            />

            <Text>Dosa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/noodles.png")}
              style={styles.image}
            />

            <Text>noodles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.box, { backgroundColor: "#ddfbf3" }]}
          >
            <Image
              source={require("../../assets/images/hamburger.png")}
              style={styles.image}
            />

            <Text>Burger</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.container}>
          <Swiper
            autoplay={true}
            autoplayTimeout={5}
            showsButtons={true}
            loop={true}
            index={0}
            removeClippedSubviews={false}
            dotColor={"red"}
            activeDotColor={"black"}
            nextButton={
              <MaterialIcons name="arrow-right" size={24} color="black" />
            }
            prevButton={
              <MaterialIcons name="arrow-left" size={24} color="black" />
            }
          >
            <View style={styles.slide}>
              <Image
                source={require("../../assets/images/images.jpg")}
                style={styles.image1}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../../assets/images/images.jpg")}
                style={styles.image1}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.container7}>
          <Text style={styles.cardouthead}>Today's special Food</Text>

          <View style={styles.maincart}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push("/food/noodles")}
              >
                <View>
                  <Image
                    source={require("../../assets/images/nodes.jpg")}
                    style={styles.image1}
                  />
                </View>
                <View style={styles.cardin1}>
                  <View style={styles.cardbox}>
                    <Text style={styles.cardin1txt}>Noodles</Text>
                    <Text style={styles.cardin2txt3}>VEG</Text>
                  </View>
                  <View style={styles.cardin2}>
                    <Text style={styles.cardin2txt1}>Fast Food</Text>
                    <Text style={styles.cardin2txt1}>
                      Price -{" "}
                      <Text style={{ textDecorationLine: "line-through" }}>
                        100 Rs
                      </Text>
                      <Text> 90Rs</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push("/food/pizza")}
              >
                <View>
                  <Image
                    source={require("../../assets/images/pizzabro.jpg")}
                    style={styles.image1}
                  />
                </View>
                <View style={styles.cardin1}>
                  <View style={styles.cardbox}>
                    <Text style={styles.cardin1txt}>Pizza</Text>
                    <Text style={styles.cardin2txt3}>VEG</Text>
                  </View>
                  <View style={styles.cardin2}>
                    <Text style={styles.cardin2txt1}>Fast Food</Text>
                    <Text style={styles.cardin2txt1}>
                      Price -{" "}
                      <Text style={{ textDecorationLine: "line-through" }}>
                        120 Rs
                      </Text>
                      <Text> 100Rs</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push("/food/samosa")}
              >
                <View>
                  <Image
                    source={require("../../assets/images/samosabro.jpg")}
                    style={styles.image1}
                  />
                </View>
                <View style={styles.cardin1}>
                  <View style={styles.cardbox}>
                    <Text style={styles.cardin1txt}>samosa</Text>
                    <Text style={styles.cardin2txt3}>VEG</Text>
                  </View>

                  <View style={styles.cardin2}>
                    <Text style={styles.cardin2txt1}>Fast Food</Text>
                    <Text style={styles.cardin2txt1}>
                      Price -{" "}
                      <Text style={{ textDecorationLine: "line-through" }}>
                        80 Rs
                      </Text>
                      <Text> 70Rs</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push("/food/dosa")}
              >
                <View>
                  <Image
                    source={require("../../assets/images/dosabro.jpg")}
                    style={styles.image1}
                  />
                </View>
                <View style={styles.cardin1}>
                  <View style={styles.cardbox}>
                    <Text style={styles.cardin1txt}>Dosa</Text>
                    <Text style={styles.cardin2txt3}>VEG</Text>
                  </View>
                  <View style={styles.cardin2}>
                    <Text style={styles.cardin2txt1}>Fast Food</Text>
                    <Text style={styles.cardin2txt1}>
                      Price -{" "}
                      <Text style={{ textDecorationLine: "line-through" }}>
                        80 Rs
                      </Text>
                      <Text> 70Rs</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container00: {
    flex: 1,
    backgroundColor: "#d47522",
  },

  maincart: {
    flex: 1,
    flexDirection: "row",
  },

  container01: {
    height: 55,
    width: "100%",
    backgroundColor: "#f5ede6",
  },
  cardbox: {
    flexDirection: "row",
  },

  container02: {
    marginTop: 12,
    marginLeft: 20,
  },

  container03: {
    marginLeft: 50,
    marginTop: -30,
    fontSize: 15,
    fontWeight: "bold",
  },

  container04: {
    marginLeft: 50,
  },

  input: {
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  container4: {
    flexDirection: "row",
  },
  container5: {
    height: 39,
    width: 30,
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 13,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container55: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    color: "red",
  },

  container6: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 5,
  },
  image: {
    width: 30,
    height: 30,
  },

  box: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
  },

  container: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
    marginBottom: 20,
  },

  image1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  slide: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },

  container7: {
    marginVertical: 10,
    // backgroundColor: "pink",
  },

  cardouthead: {
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 10,
    paddingLeft: 5,
  },

  cardimage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },

  card: {
    width: 200,
    height: 100,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 100,
  },
  cardin1: {
    marginHorizontal: 3,
    marginTop: 3,
  },

  cardin1txt: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 5,
  },

  cardin2: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
  },

  cardin2txt1: {
    fontSize: 12,
    marginRight: 10,
    fontWeight: "500",
  },

  cardin2txt3: {
    height: 15,
    marginTop: 5,
    marginLeft: 70,
    width: 50,
    borderRadius: 10,
    backgroundColor: "grey",
    fontSize: 10,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
  },
});
