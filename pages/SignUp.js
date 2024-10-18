/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
//Sử dụng SQLlite
import * as SQLite from "expo-sqlite/legacy";
import { Image } from "react-native";
import { styles } from "./Loggin";
import { Alert } from "react-native";
const db = SQLite.openDatabase("Qlbhlt.db");
export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetControl = () => {
    setEmail("");
    setPassword("");
  };
  // Create a new user
  const checkAndCreateTable = (sql) => {
    // Check if table exists
    sql.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='tbluser'",
      [],
      (txn, result) => {
        console.log("Check table result:", result.rows.length);

        // If table does not exist, create it
        if (result.rows.length == 0) {
          sql.executeSql(
            "CREATE TABLE IF NOT EXISTS tbluser (mand INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(200), password VARCHAR(200))",
            [],
            (txn, result) => {
              console.log("Table 'tbluser' created successfully.");
            },
            (txn, error) => {
              console.error("Error creating table:", error);
            }
          );
        }
      },
      (tx, error) => {
        console.error("Error checking table existence:", error);
      }
    );
  };

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    db.transaction((sql) => {
      // checkAndCreateTable(sql);
      sql.executeSql(
        `INSERT INTO tbluser (email, password) VALUES (?, ?)`,
        [email, password],
        (tx, result) => {
          Alert.alert("Success", "Account created successfully!");
          // Navigate to the login page after successful signup
          navigation.navigate("Login");
        },
        (tx, error) => {
          console.error("Error during signup:", error);
          Alert.alert("Error", "Failed to create account");
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6159/6159448.png",
        }}
        style={styles.image}
      ></Image>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>
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
      <View style={{ width: "100%" }}>
        <Text
          style={{ color: "red" }}
          onPress={() => {
            resetControl();
            navigation.navigate("Loggin");
          }}
        >
          Already have an account?
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleSignup();
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
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
