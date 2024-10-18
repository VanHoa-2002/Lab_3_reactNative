/* eslint-disable react/prop-types */
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import UserContext from "../UserContext";

export default function Profile({ navigation }) {
  const { nd, dangnhap, dangxuat } = useContext(UserContext);

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.button.text}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Loggin");
        }}
      >
        <Text style={styles.button.text}>Loggin</Text>
      </TouchableOpacity>
      <View>
        <Text>User hiện tại</Text>
        <Text>{nd.tennd}</Text>
      </View>
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
