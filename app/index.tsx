import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("userToken"); // Token-based authentication
      setIsLoggedIn(!!token);
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) return null; // Wait for AsyncStorage

  return isLoggedIn ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/about/signup" />
  );
}
