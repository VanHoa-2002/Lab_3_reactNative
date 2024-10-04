import { View, Text } from "react-native";
import React from "react";

export default function DetailHome() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>Detail Home</Text>
    </View>
  );
}
