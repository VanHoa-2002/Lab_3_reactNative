import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

export default function Category() {
  const layout = useWindowDimensions();
  const CatFirst1 = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
        activeColor="#4169e1"
        inactiveColor="gray"
        pressColor="#87ceeb"
        renderLabel={({ focused, route }) => {
          return (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "gray",
              }}
            >
              {route.title}
            </Text>
          );
        }}
      />
    );
  };
  const CatFirst = () => (
    <View
      style={{
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.textHeader}>Categori 1</Text>
    </View>
  );
  const CatSecond = () => (
    <View
      style={{
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.textHeader}>Categori 2</Text>
    </View>
  );
  const CatThird = () => (
    <View
      style={{
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.textHeader}>Categori 3</Text>
    </View>
  );

  const renderScene = SceneMap({
    CatFirst: CatFirst,
    CatSecond: CatSecond,
    CatThird: CatThird,
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "CatFirst", title: "Category 1" },
    { key: "CatSecond", title: "Category 2" },
    { key: "CatThird", title: "Category 3" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={CatFirst1}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      animationEnabled={true}
    />
  );
}
const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "white" },
  tabBar: {
    backgroundColor: "#ffffff",
  },
  indicatorStyle: {
    backgroundColor: "#4169e1",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
