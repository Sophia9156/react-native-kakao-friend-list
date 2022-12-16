import { useState } from "react";
import { View, FlatList } from "react-native";
import { myProfile, friendProfiles } from '../data';
import Division from "../components/Division";
import FriendSection from "../components/FriendSection";
import Header from "../components/Header";
import Margin from "../components/Margin";
import Profile from "../components/Profile";

export default function ListScreen() {
  const [isOpened, setOpened] = useState(true);

  const onPressArrow = () => {
    setOpened(!isOpened);
  };

  const ListHeaderComponent = () => (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />

      <Profile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      <Division />
      <Margin height={12} />

      <FriendSection 
        friendProfileLength={friendProfiles.length}
        isOpened={isOpened}
        onPressArrow={onPressArrow}
      />

      <Margin height={5} />
    </View>
  );
  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({item}) => (
    <View>
      <Profile 
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <FlatList 
      data={isOpened ? friendProfiles : []}
      stickyHeaderIndices={[0]}
      keyExtractor={(_, index) => index}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{ paddingHorizontal: 15, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />

          <Margin height={10} />

          <Profile 
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />

          <Margin height={15} />
          <Division />
          <Margin height={12} />

          <FriendSection 
            friendProfileLength={friendProfiles.length}
            isOpened={isOpened}
            onPressArrow={onPressArrow}
          />

          <FriendList 
            data={friendProfiles}
            isOpened={isOpened}
          />
        </View>
        <TabBar 
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
