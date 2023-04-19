import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MyForm from "./components/form/Form";
import Calculator from "./components/Calc/Calc";
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [items, setItems] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchItem = () => {
    setIsLoading(true);
    axios
      .get("https://native-7ecd8-default-rtdb.firebaseio.com/data.json")
      .then(({ data }) => {
        setItems(data);
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
    <View style={styles.container}>
      <MyForm data={items.title} />
      {/* <Calculator /> */}
      <StatusBar backgroundColor="red" barStyle="light-content" height={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
