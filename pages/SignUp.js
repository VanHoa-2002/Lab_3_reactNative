/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import { useState, React } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
//Sử dụng SQLlite
import { Alert, Image } from "react-native";
import { styles } from "./Loggin";
import * as SQLite from "expo-sqlite";
const openDb = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("Qlbhlt.db");
    return db;
  } catch (error) {
    console.error("Error while creating table:", error);
    alert("Tạo Bảng Thất Bại");
  }
};
const Del = async () => {
  try {
    const db = await openDb();
    db.execAsync("DROP TABLE IF EXISTS tbluser");
    alert("Xóa Bảng Thành Công");
  } catch (error) {
    console.error("Error while creating table:", error);
    alert("Xóa Bảng Thất Bại");
  } finally {
    db.closeAsync();
  }
};
export default function SignUp({ navigation }) {
  const Taobanguser = async () => {
    try {
      const db = await openDb();

      // Check if table exists
      const result = await db.getAllAsync(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tbluser'"
      );
      console.log(result);

      if (result?.length === 0) {
        // Table doesn't exist, create it
        await db.runAsync(
          "CREATE TABLE IF NOT EXISTS tbluser(email VARCHAR(200) PRIMARY KEY NOT NULL, password VARCHAR(200))"
        );
        alert("Tạo Bảng Thành Công");
      } else {
        alert("Bảng đã có");
      }
    } catch (error) {
      console.error("Error while creating table:", error);
      alert("Tạo Bảng Thất Bại");
    }
  };

  const register = async (email, password) => {
    if (!email || !password) {
      Alert.alert("Error", "Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }
    const db = await openDb();
    try {
      await db.withTransactionAsync(async () => {
        const check = await db.getAllSync(
          "SELECT * FROM tbluser WHERE email = ?",
          [email]
        );
        if (check?.length > 0) {
          alert("Email đã tồn tại, vui lòng nhập email khác");
          return;
        } else {
          await db.runAsync(
            "INSERT INTO tbluser (email,password) VALUES (?,?)",
            [email, password]
          );
        }
        alert("Đăng ký tài khoản thành công");
      });
    } catch (error) {
      throw Error("Error while inserting data:", error);
    } finally {
      db.closeAsync();
    }
  };
  const DocBangNguoiDung = async () => {
    console.log("DocBangNguoiDung");
    const db = await openDb(); // Open the database

    try {
      await db.withTransactionAsync(async () => {
        const result = await db.getAllAsync("SELECT * FROM tbluser");
        console.log(result);
        setgandsnguoidung(result);
      });

      // Log the fetched user data
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      db.close(); // Optional: close the database connection
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gandsnguoidung, setgandsnguoidung] = useState([]);
  const resetControl = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={gandsnguoidung}
        renderItem={({ item }) => (
          <View>
            <Text>{item.email}</Text>
            <Text>{item.password}</Text>
          </View>
        )}
      ></FlatList>
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
          register(email, password);
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
      <Button
        title="Tạo Bảng"
        onPress={() => {
          Taobanguser();
        }}
      />
      <Button
        title="Đọc Bảng"
        onPress={() => {
          DocBangNguoiDung();
        }}
      />
      <Button
        title="Đọc Bảng"
        onPress={async () => {
          Del();
        }}
      />
    </View>
  );
}
