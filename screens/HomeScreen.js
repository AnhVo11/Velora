import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation, userEmail, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velora</Text>
      <Text style={styles.subtitle}>Your smart fit assistant</Text>

      {userEmail && (
        <Text style={styles.userInfo}>Logged in as: {userEmail}</Text>
      )}

      <View style={styles.buttonGroup}>
        <Button
          title="Add Clothes from Home"
          onPress={() => navigation.navigate("AddClothes")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="My Closet"
          onPress={() => navigation.navigate("MyCloset")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="Check Clothes in Store"
          onPress={() => navigation.navigate("StoreCheck")}
        />
      </View>

      <View style={styles.logoutWrapper}>
        <Button title="Log Out" color="#b00020" onPress={onLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
    color: "#555",
  },
  userInfo: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
    color: "#777",
  },
  buttonGroup: {
    marginVertical: 6,
  },
  logoutWrapper: {
    marginTop: 32,
  },
});
