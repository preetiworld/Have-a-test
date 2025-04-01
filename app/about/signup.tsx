import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [confirmpass, setConfirmPass] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (!username || !password || !confirmpass) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (password !== confirmpass) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const user = { username, password, };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      Alert.alert("Success", "Account created successfully");
      router.push("/about/login");
    } catch (error) {
      Alert.alert("Error", "Signup failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#d47522" />
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmpass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ backgroundColor: "#3fb594", padding: 10, borderRadius: 5 }}
        onPress={handleSignup}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Signup
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#3fb594",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => router.push("/about/login")}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SignupScreen;
