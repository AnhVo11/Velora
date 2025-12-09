import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function StoreCheckScreen() {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [sizeLabel, setSizeLabel] = useState("");

  const handleCheck = () => {
    // TODO: later compare this with saved closet items
    console.log("Checking store item:", { type, brand, sizeLabel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Clothes in Store</Text>

      <Text style={styles.label}>Type</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
        placeholder="T-shirt, jeans, hoodie…"
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Brand on the tag"
      />

      <Text style={styles.label}>Size on label</Text>
      <TextInput
        style={styles.input}
        value={sizeLabel}
        onChangeText={setSizeLabel}
        placeholder="M, L, 30x30, US 8.5…"
      />

      <View style={styles.buttonWrapper}>
        <Button title="Check (placeholder)" onPress={handleCheck} />
      </View>

      <Text style={styles.info}>
        Later: we will compare this with your closet and say how it will fit.
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
  label: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    color: "#666",
  },
});
