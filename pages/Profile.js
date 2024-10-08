/* eslint-disable react/prop-types */
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container.header}>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LogOut");
        }}
      >
        <Text style={styles.button.text}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    header: {
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  button: {
    backgroundColor: "#87ceeb",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    text: {
      fontSize: 15,
      color: "white",
      fontWeight: "500",
      textTransform: "uppercase",
    },
  },
});
