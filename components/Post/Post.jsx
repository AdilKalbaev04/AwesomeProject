import styled from "styled-components";
const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
const PostDetails = styled.View`
  justify-content: center;
`;

export const PostItem = ({ title, img, createdAt }) => {
  return (
    <Post>
      <PostImage source={{ uri: img }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt} </PostDate>
      </PostDetails>
    </Post>
  );
};
