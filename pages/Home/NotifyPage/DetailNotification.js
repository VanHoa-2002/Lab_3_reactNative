import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

export default function DetailNotification() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Detail Notification
      </Text>
    </View>
  );
}
