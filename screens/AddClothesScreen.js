import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddClothesScreen() {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [sizeLabel, setSizeLabel] = useState("");
  const [fit, setFit] = useState("");

  const handleSave = () => {
    // TODO: save to local storage later
    console.log("Saving item:", { type, brand, sizeLabel, fit });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Clothes</Text>

      <Text style={styles.label}>Type (T-shirt, jeans, hoodie…)</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
        placeholder="T-shirt"
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Uniqlo, Nike, Zara…"
      />

      <Text style={styles.label}>Size on label</Text>
      <TextInput
        style={styles.input}
        value={sizeLabel}
        onChangeText={setSizeLabel}
        placeholder="M, L, 30x30, US 8.5…"
      />

      <Text style={styles.label}>Fit on you</Text>
      <TextInput
        style={styles.input}
        value={fit}
        onChangeText={setFit}
        placeholder="Too tight, perfect, loose…"
      />

      <View style={styles.buttonWrapper}>
        <Button title="Save (placeholder)" onPress={handleSave} />
      </View>
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
  },
});
