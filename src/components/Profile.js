import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import Margin from "./Margin";

const Profile = ({ 
  uri, 
  name, 
  introduction, 
  isMe,
}) => {
  const size = isMe ? 50 : 40;

  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  )
};

export default Profile;

const Container = styled.View`
  flex-direction: row;
  background-color: white;
`;

const ProfileImage = styled.Image`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-weight: ${({isMe}) => isMe ? "bold" : "normal"};
  font-size: ${({isMe}) => isMe ? 16 : 15}px;
`;

const IntroductionText = styled.Text`
  font-size: ${({isMe}) => isMe ? 12 : 11}px;
  color: grey;
`;