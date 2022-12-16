import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function FriendSection({ friendProfileLength, onPressArrow, isOpened }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {friendProfileLength}</Text>

      <TouchableOpacity onPress={onPressArrow}>
        <MaterialIcons name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="lightgrey" />
      </TouchableOpacity>
    </View>
  )
}
