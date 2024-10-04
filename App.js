import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "./gesture-handler.native";
import Category from "./pages/Category";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Home from "./pages/Home/Home";

// const db = await SQLite.openDatabaseAsync("QLbanhoa.db");
const Tab = createBottomTabNavigator();
export default function App() {
  const taoBangHoa = () => {};
  // const taoBangHoa = () => {
  //   db.transaction((txn) => {
  //     txn.executeSql(
  //       'SELECT name FROM sqlite_master WHERE type="table" AND name="tblloaihoa"',
  //       [],
  //       function (tx, res) {
  //         if (res.rows.length == 0) {
  //           txn.executeSql("DROP TABLE IF EXISTS tblloaihoa", []);
  //           txn.executeSql(
  //             "CREATE TABLE IF NOT EXISTS tblloaihoa(maloai INTEGER PRIMARY KEY AUTOINCREMENT, tenloai TEXT);",
  //             []
  //           );
  //           alert("Tao bang loai hoa thanh cong");
  //         } else {
  //           alert("Bang loai hoa da ton tai");
  //         }
  //       }
  //     );
  //   });
  // };
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
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
