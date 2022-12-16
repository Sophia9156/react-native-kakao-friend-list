import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace();

const TabButton = ({ 
  isSelected, 
  onPress, 
  activeIconName, 
  inactiveIconName,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
      activeOpacity={0.5}
    >
      <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
    </TouchableOpacity>
  )
}

export default function TabBar({ selectedTabIndex, setSelectedTabIndex }) {
  return (
    <View style={{ 
      flexDirection: "row", 
      width: "100%", 
      borderTopWidth: 0.5,
      borderColor: "grey",
      paddingBottom: bottomSpace,
    }}>
      <TabButton 
        isSelected={selectedTabIndex === 0}
        onPress={()=> setSelectedTabIndex(0)}
        activeIconName={"person"}
        inactiveIconName={"person-outline"}
      />
      <TabButton 
        isSelected={selectedTabIndex === 1}
        onPress={()=> setSelectedTabIndex(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
      />
      <TabButton 
        isSelected={selectedTabIndex === 2}
        onPress={()=> setSelectedTabIndex(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
      />
      <TabButton 
        isSelected={selectedTabIndex === 3}
        onPress={()=> setSelectedTabIndex(3)}
        activeIconName={"camera"}
        inactiveIconName={"camera-outline"}
      />
    </View>
  )
}