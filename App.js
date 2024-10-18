import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "./gesture-handler.native";
import Category from "./pages/Category";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Help from "./pages/Home/HelpPage/Help";
import HomeContainer from "./pages/Home/HomeContainer";
import DetailNotification from "./pages/Home/NotifyPage/DetailNotification";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "./pages/Home/NotifyPage/Notification";
import DetailHome from "./pages/Home/HomePage/DetailHome";
import LogOut from "./pages/LogOut";
import Loggin from "./pages/Loggin";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { createContext, useContext } from "react";
import UserContext from "./UserContext";

// const db = await SQLite.openDatabaseAsync("QLbanhoa.db");
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Category":
              iconName = "grid-outline";
              break;
            case "Favorite":
              iconName = "heart-outline";
              break;
            case "Category":
              iconName = "grid-outline";
              break;
            default:
              iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default function App() {
  const [nd, gannguoidung] = useState({ tennd: "" });
  const dangnhap = (nd) => {
    gannguoidung(nd);
  };
  const dangxuat = () => {
    gannguoidung(null);
  };
  return (
    <UserContext.Provider value={{ nd, dangnhap, dangxuat }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loggin">
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="DetailNotify" component={DetailNotification} />
          <Stack.Screen name="DetailHome" component={DetailHome} />
          <Stack.Screen name="LogOut" component={LogOut} />
          <Stack.Screen
            name="Loggin"
            component={Loggin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
