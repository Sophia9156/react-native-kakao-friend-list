import { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
// import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "./src/components/TabBar";
import ListScreen from "./src/screens/ListScreen";
import PhotosScreen from "./src/screens/PhotosScreen";

// const statusBarHeight = getStatusBarHeight(true);
// const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const Tab = createBottomTabNavigator();

  const TabButton = ({
    color,
    name, 
  }) => {
    return (
      <TouchableOpacity 
        style={{ 
          flex: 1, 
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          color,
        }}
        activeOpacity={0.5}
      >
        <Ionicons name={name} size={24} color="black" />
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: "red"
            }}
          >
            <Tab.Screen 
              name="Home" 
              component={ListScreen} 
              options={{
                title: "",
                tabBarIcon: ({ color }) => (
                  <TabButton name="person" color={color} />
                )
              }}
            />
            <Tab.Screen 
              name="Photos" 
              component={PhotosScreen} 
              options={{
                title: "",
                tabBarIcon: ({ color }) => (
                  <TabButton name="camera" color={color} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
