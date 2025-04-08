import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { database } from "../firebaseConfig";
import { ref, set } from "firebase/database";
import React, { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitForm = async () => {
    if (!username || !password || !email || !phone) {
      Alert.alert("Error", "Please fill all the details");
      return;
    }

    try {
      const newContactRef = ref(database, "contacts/" + Date.now());
      await set(newContactRef, {
        username,
        password,
        email,
        phone,
      });

      Alert.alert("Success!", " your profile successfully created");
      setUsername("");
      setPassword("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error storing data", error);
      Alert.alert("Error!", "Error storing data");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{ fontSize: 20, margin: 10 }}>Profile</Text>

        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmitForm}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d47522",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  container2: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

