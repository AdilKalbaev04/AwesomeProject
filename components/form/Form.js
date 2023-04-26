import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const data = {
    title: name,
    desc: email,
  };

  function remove(index) {
    console.log(index);
    setItems(() => {
      const newData = [...items];
      newData.splice(index, 1);
      return newData;
    });
  }

  const handleSubmit = () => {
    axios
      .post("https://native-7ecd8-default-rtdb.firebaseio.com/data.json", data)
      .then((response) => {
        alert("send");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchItem = () => {
    setIsLoading(true);
    axios
      .get("https://native-7ecd8-default-rtdb.firebaseio.com/data.json")
      .then(({ data }) => {
        const newData = Object.keys(data).map((xz) => {
          return data[xz];
        });
        // console.log(newData);
        setItems(newData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchItem, []);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ActivityIndicator size={"large"} />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        onChangeText={handleNameChange}
        value={name}
      />
      <TextInput
        placeholder="Enter your email"
        onChangeText={handleEmailChange}
        value={email}
      />
      <Button title="Submit" onPress={handleSubmit} />

      <FlatList
        // keyExtractor={(items) => items}
        data={items}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                remove(index);
              }}
            >
              <View>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MyForm;
