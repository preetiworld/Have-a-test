import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(storedUser);
        if (username === storedUsername && password === storedPassword) {
          Alert.alert("Success", "Logged in successfully");
          router.push("/(tabs)/home");
        } else {
          Alert.alert("Error", "Invalid username or password");
        }
      } else {
        Alert.alert("Error", "No account found. Please sign up first.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#d47522" />
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#3fb594",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default LoginScreen;
