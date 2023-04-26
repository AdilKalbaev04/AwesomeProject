import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import MyForm from "../form/Form";
const SettingsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fetchItem = () => {
    setIsLoading(true);
    axios
      .get("https://native-7ecd8-default-rtdb.firebaseio.com/data.json")
      .then(({ data }) => {
        const newData = Object.keys(data).map((xz) => {
          return data[xz];
        });
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
    <SafeAreaView style={styles.container}>
      <MyForm />
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

export default SettingsScreen;
