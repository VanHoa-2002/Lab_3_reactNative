import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import { StyleSheet } from "react-native";
import Help from "./Help";
import Notification from "./Notification";
const Drawer = createDrawerNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "./HomePage";

export default class Home extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? "#1e90ff" : "#ccc"}
              />
            ),
          }}
          name="Home"
          component={HomePage}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={focused ? "#1e90ff" : "#ccc"}
              />
            ),
          }}
          name="Notification"
          component={Notification}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="help-circle-outline"
                size={size}
                color={focused ? "#1e90ff" : "#ccc"}
              />
            ),
          }}
          name="Help"
          component={Help}
        />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
