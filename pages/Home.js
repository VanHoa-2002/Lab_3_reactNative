import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { StyleSheet } from "react-native";
import Help from "./Help";
import Notification from "./Notification";
const Drawer = createDrawerNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Home extends Component {
  render() {
    return (
      // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Notification">
        <Drawer.Screen
          options={{
            title: "Home",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
          name="Notification"
          component={Notification}
        />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
