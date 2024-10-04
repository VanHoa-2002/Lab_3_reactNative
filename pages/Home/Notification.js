import { createStackNavigator } from "@react-navigation/stack";
import { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Detail = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#00bfff",
        padding: 10,
        width: 200,
        borderRadius: 5,
      }}
      onPress={() => navigation.navigate("DetailNotification")}
    >
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          fontSize: 20,
        }}
      >
        Go to details
      </Text>
    </TouchableOpacity>
  );
};
const Detail1 = ({ navigation }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
      }}
    >
      Notification screen
    </Text>
  );
};
const Stack = createStackNavigator();
export default class Notification extends Component {
  render() {
    return (
      <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Go to Details2" component={Detail1} />
          <Stack.Screen name="Go to Details" component={Detail} />
        </Stack.Navigator>
      </View>
    );
  }
}
