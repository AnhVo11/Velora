import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./screens/HomeScreen";
import AddClothesScreen from "./screens/AddClothesScreen";
import MyClosetScreen from "./screens/MyClosetScreen";
import StoreCheckScreen from "./screens/StoreCheckScreen";
import AuthScreen from "./screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [authToken, setAuthToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load token from storage on app start
  useEffect(() => {
    const loadAuth = async () => {
      try {
        const stored = await AsyncStorage.getItem("veloraAuth");
        if (stored) {
          const parsed = JSON.parse(stored);
          setAuthToken(parsed.token);
          setUserEmail(parsed.email);
        }
      } catch (err) {
        console.error("Error loading auth", err);
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  const handleAuthSuccess = async ({ token, email }) => {
    try {
      const authData = { token, email };
      await AsyncStorage.setItem("veloraAuth", JSON.stringify(authData));
      setAuthToken(token);
      setUserEmail(email);
    } catch (err) {
      console.error("Error saving auth", err);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("veloraAuth");
    } catch (err) {
      console.error("Error clearing auth", err);
    } finally {
      setAuthToken(null);
      setUserEmail(null);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authToken == null ? (
          // Not logged in → show Auth
          <Stack.Screen name="Auth" options={{ headerShown: false }}>
            {(props) => (
              <AuthScreen
                {...props}
                onAuthSuccess={handleAuthSuccess}
              />
            )}
          </Stack.Screen>
        ) : (
          // Logged in → show main app
          <>
            <Stack.Screen
              name="Home"
              options={{ title: "Velora" }}
            >
              {(props) => (
                <HomeScreen
                  {...props}
                  userEmail={userEmail}
                  onLogout={handleLogout}
                />
              )}
            </Stack.Screen>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
