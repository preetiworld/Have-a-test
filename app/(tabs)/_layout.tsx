import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "index",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={29} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={28} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={28} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="trackorder"
        options={{
          title: "trackorder",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="contacts" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Drawer } from "expo-router/drawer";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";

// export default function DrawerLayout() {
//   return (
//     <Drawer
//       screenOptions={{
//         headerShown: false,
//         drawerActiveTintColor: "black",
//         drawerInactiveTintColor: "black",
//       }}
//     >
//       <Drawer.Screen
//         name="home"
//         options={{
//           title: "Home",
//           drawerIcon: ({ color }) => (
//             <FontAwesome size={28} name="home" color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           drawerIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" size={29} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="cart"
//         options={{
//           title: "Cart",
//           drawerIcon: ({ color }) => (
//             <AntDesign name="shoppingcart" size={28} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="settings"
//         options={{
//           title: "Settings",
//           drawerIcon: ({ color }) => (
//             <Ionicons name="settings-outline" size={28} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="trackorder"
//         options={{
//           title: "Track Order",
//           drawerIcon: ({ color }) => (
//             <AntDesign size={28} name="contacts" color={color} />
//           ),
//         }}
//       />
//     </Drawer>
//   );
// }
