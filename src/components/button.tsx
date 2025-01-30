import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ title, onPress, variant = "primary" }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === "secondary" && styles.textSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondary: {
    backgroundColor: "#E5E5E5",
  },
  textSecondary: {
    color: "#333",
  },
});
