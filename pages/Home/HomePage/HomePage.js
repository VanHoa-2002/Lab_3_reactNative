/* eslint-disable react/prop-types */
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import * as SQLite from "expo-sqlite/legacy";
const db = SQLite.openDatabase("example2.db");
const taobangloaihoa = () => {
  console.log("pl");

  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_loaihoa'",
      [],
      function (tx, res) {
        console.log("item:", res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql("DROP TABLE IF EXISTS table_loaihoa", []);
          txn.executeSql(
            "CREATE TABLE IF NOT EXISTS table_loaihoa(maloai INTEGER PRIMARY KEY AUTOINCREMENT, tenloai VARCHAR(200), hinh VARCHAR(255))",
            []
          );
          alert("Tạo Bảng Thành Công");
        } else alert("Bảng đã có");
      }
    );
  });
};
const ThemData = () => {
  const DATA = [
    {
      tenloai: "Hoa Quà tặng",
      hinh: "./assets/images/cuc_9.jpg",
    },
    {
      tenloai: "Hoa Hồng",
      hinh: "./assets/images/hong_1.jpg",
    },
    {
      tenloai: "Hoa Xuân",
      hinh: "./assets/images/xuan_1.jpg",
    },
    {
      tenloai: "Hoa Tình Nhân",
      hinh: "./assets/images/cuc_9.jpg",
    },
  ];
  for (i = 0; i < DATA.length; i++) {
    taodulieubangloaihoa(DATA[i].tenloai, DATA[i].hinh);
  }
};
const taodulieubangloaihoa = (tenloai, hinh) => {
  db.transaction(function (tx) {
    tx.executeSql(
      "INSERT INTO table_loaihoa (tenloai, hinh) VALUES (?,?)",
      [tenloai, hinh],
      (tx, results) => {
        console.log("Results", results.rowsAffected);
      }
    );
  });
};

export default function HomePage({ navigation }) {
  let [DATA, setFlatListItems] = useState([]);
  const DocBang = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM table_loaihoa", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.container.header}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("DetailHome");
        }}
      >
        <Text style={styles.button.text}>Go to detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          taobangloaihoa();
        }}
      >
        <Text style={styles.button.text}>Create Table Flower</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("DetailHome");
        }}
      >
        <Text style={styles.button.text}>Go to detail</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Button
          title="Tạo Bảng Loại Hoa"
          onPress={() => {
            taobangloaihoa();
          }}
        />
        <Button
          title="Thêm Loại Hoa"
          onPress={() => {
            ThemData();
          }}
        />
        <Button
          title="Đọc Loại Hoa"
          onPress={() => {
            DocBang();
          }}
        />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Text style={styles.text}>{item.tenloai} </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text>{DATA.length}</Text>
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
  text: {
    fontSize: 20,
    color: "orange",
    backgroundColor: "white",
    padding: 10,
    fontWeight: "bold",
  },
});
