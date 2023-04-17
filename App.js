import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyForm from "./components/form/Form";
import Calculator from "./components/Calc/Calc";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyForm /> */}
      <Calculator />
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
