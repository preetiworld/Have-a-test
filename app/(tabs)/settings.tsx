import { StyleSheet, Text, View } from "react-native";
import React from "react";

const settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Account and Settings</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </View>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d47522",
    flex: 1,
  },

  button: {
    backgroundColor: "white",
    width: 334,
    marginLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "Black",
    fontSize: 16,
  },
});
