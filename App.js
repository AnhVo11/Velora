import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddClothesScreen from "./screens/AddClothesScreen";
import MyClosetScreen from "./screens/MyClosetScreen";
import StoreCheckScreen from "./screens/StoreCheckScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Velora" }}
        />
        <Stack.Screen
          name="AddClothes"
          component={AddClothesScreen}
          options={{ title: "Add Clothes" }}
        />
        <Stack.Screen
          name="MyCloset"
          component={MyClosetScreen}
          options={{ title: "My Closet" }}
        />
        <Stack.Screen
          name="StoreCheck"
          component={StoreCheckScreen}
          options={{ title: "Check in Store" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
