import React from "react";
import { CartProvider } from "./context/CartContext";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
