/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
//Sử dụng SQLlite
import * as SQLite from "expo-sqlite/legacy";
import UserContext from "../UserContext";
const db = SQLite.openDatabase("qlbh.db");
// eslint-disable-next-line react/prop-types

export default function Loggin({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({ email: "" });
  const { nd, dangnhap, dangxuat } = useContext(UserContext);
  const resetControl = () => {
    setEmail("");
    setPassword("");
  };
  const checkLogin = () => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
    db.transaction((sqlCall) => {
      sqlCall.executeSql(
        "SELECT * FROM tbluser where email=? and password=?",
        [email, password],
        (tran, results) => {
          console.log(results.rows.length);
          if (results.rows.length > 0) {
            setCurrentUser(results.rows.item(0));
            alert("Your login is successful");
          } else {
            alert("Opps, Your account is not exist, try create new account");
          }
        },
        (tx, error) => {
          alert("Opps, Your account is not exist, try create new account");
          console.error("SQL query error:", error);
        }
      );
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/295/295128.png",
        }}
      ></Image>
      <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 5 }}>
        Welcome
      </Text>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.icon} name={"mail-outline"} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          selectionColor={"#000"}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.icon} name={"lock-closed-outline"} />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          selectionColor={"#000"}
          autoCapitalize="none"
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Text
          style={{ color: "red" }}
          onPress={() => {
            resetControl();
            navigation.navigate("SignUp");
          }}
        >
          Not have an account?
        </Text>
        <Text style={{ color: "red" }}>Forgot password?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          checkLogin();
        }}
        style={{
          backgroundColor: "orange",
          padding: 10,
          borderRadius: 10,
          width: "50%",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            color: "white",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 5,
  },
  input: {
    height: 40,
    flex: 1,
  },
  icon: {
    fontSize: 20,
  },
});
