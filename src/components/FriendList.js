import { ScrollView, View } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Margin from "./Margin";
import Profile from "./Profile";

const bottomSpace = getBottomSpace();

export default function FriendList({ data, isOpened }) {
  return isOpened ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, key) => (
        <View key={key}>
          <Profile 
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  ) : null;
}