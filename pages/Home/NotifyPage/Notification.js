/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container.header}>Notification Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("DetailNotify");
        }}
      >
        <Text style={styles.button.text}>Go to detail</Text>
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
