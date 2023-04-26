import { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 25px;
`;

const FullPost = ({ route }) => {
  const [postInfo, setPostInfo] = useState(route.params);
  console.log(postInfo);
  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: postInfo.imageURL,
        }}
      />
      <PostText>{postInfo.title}</PostText>
    </View>
  );
};

export default FullPost;
