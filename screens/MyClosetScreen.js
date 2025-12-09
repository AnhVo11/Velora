import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyClosetScreen() {
  // Later we will show real saved items here
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Closet</Text>
      <Text style={styles.text}>
        You don&apos;t have any saved clothes yet.
      </Text>
      <Text style={styles.text}>
        Add some from the home screen to see them here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
});
