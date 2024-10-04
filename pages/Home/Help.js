import { Text, View } from "react-native";
import React, { Component } from "react";

export default class Help extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: "100%",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Help screen
        </Text>
      </View>
    );
  }
}
