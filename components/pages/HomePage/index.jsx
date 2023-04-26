import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostItem } from "../../Post/Post";
import { FlashList } from "@shopify/flash-list";
import { TextInput } from "react-native";
import { Button } from "react-native";

export const HomePage = ({ navigation }) => {
  const [items, setItems] = useState();

  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("https://6447a0a67bb84f5a3e43f00f.mockapi.io/post/posts")
      .then(({ data }) => {
        setItems(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  }, []);

  const data = {
    title: title,
  };

  const handleSubmit = () => {
    axios
      .post("https://6447a0a67bb84f5a3e43f00f.mockapi.io/post/posts", data)
      .then(({ data }) => {
        axios
          .get("https://6447a0a67bb84f5a3e43f00f.mockapi.io/post/posts")
          .then(({ data }) => {
            setItems(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
            alert("error");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameChange = (text) => {
    setTitle(text);
  };

  const redirectFunc = (item) => {
    navigation.navigate("FullPost", item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        onChangeText={handleNameChange}
        value={title}
      />

      <Button title="Submit" onPress={handleSubmit} />
      <FlashList
        data={items}
        estimatedItemSize={100}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                redirectFunc(item);
              }}
            >
              <PostItem
                key={item.id}
                title={item.title}
                img={item.imageURL}
                createdAt={item.createdAt}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
