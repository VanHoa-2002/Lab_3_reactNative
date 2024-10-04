import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Component } from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Help from "./HelpPage/Help";
import HomePage from "./HomePage/HomePage";
import Notification from "./NotifyPage/Notification";

const Drawer = createDrawerNavigator();

export default class HomeContainer extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="HomePage">
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
          name="HomePage"
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
