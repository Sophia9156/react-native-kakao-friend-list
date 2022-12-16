import { Platform, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ListScreen from "./src/screens/ListScreen";
import PhotosScreen from "./src/screens/PhotosScreen";

const statusBarHeight = getStatusBarHeight(true);
// const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const Tab = createBottomTabNavigator();

  const TabButton = ({
    color,
    name, 
  }) => {
    return (
      <View 
        style={{ 
          flex: 1, 
          paddingTop: 10,
          paddingBottom: 10,
        }}
        activeOpacity={0.5}
      >
        <Ionicons name={name} size={24} color={color} />
      </View>
    )
  };

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "lightgrey",
          tabBarStyle: { height: 90 },
          headerStyle: { height: statusBarHeight }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={ListScreen} 
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <TabButton 
                name="person" 
                color={color} 
              />
            )
          }}
        />
        <Tab.Screen 
          name="Photos" 
          component={PhotosScreen} 
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <TabButton 
                name="camera" 
                color={color} 
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
