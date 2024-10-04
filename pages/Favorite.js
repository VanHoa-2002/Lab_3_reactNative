import { Text, View } from "react-native";
import React, { Component } from "react";

export default class Favorite extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Favorite
        </Text>
      </View>
    );
  }
}
