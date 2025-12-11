import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { API_BASE_URL } from "../config";

export default function AuthScreen({ onAuthSuccess }) {
  const [mode, setMode] = useState("login"); // "login" or "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Missing info", "Email and password are required.");
      return;
    }

    try {
      setSubmitting(true);

      const endpoint =
        mode === "login" ? "/auth/login" : "/auth/register";

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert(
          "Error",
          data?.error || "Authentication failed. Please try again."
        );
        return;
      }

      // Backend returns: { token, email }
      onAuthSuccess({
        token: data.token,
        email: data.email,
      });
    } catch (err) {
      console.error("Auth error:", err);
      Alert.alert("Error", "Could not reach Velora server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velora</Text>
      <Text style={styles.subtitle}>
        {mode === "login"
          ? "Log in to your closet"
          : "Create a Velora account"}
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="you@example.com"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />

      <View style={styles.buttonWrapper}>
        <Button
          title={
            submitting
              ? "Please wait..."
              : mode === "login"
              ? "Log In"
              : "Register"
          }
          onPress={handleSubmit}
          disabled={submitting}
        />
      </View>

      <View style={styles.switchWrapper}>
        <Text>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </Text>
        <Button
          title={
            mode === "login"
              ? "Switch to Register"
              : "Switch to Login"
          }
          onPress={() =>
            setMode(mode === "login" ? "register" : "login")
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#555",
  },
  label: { fontSize: 14, marginBottom: 4, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
  buttonWrapper: { marginTop: 20 },
  switchWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
});
