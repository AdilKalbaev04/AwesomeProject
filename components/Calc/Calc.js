import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const addNumbers = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum.toString());
  };

  const subtractNumbers = () => {
    const difference = parseInt(number1) - parseInt(number2);
    setResult(difference.toString());
  };

  return (
    <View>
      <Text style={styles.title}>Simple Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        onChangeText={(text) => setNumber1(text)}
        value={number1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        onChangeText={(text) => setNumber2(text)}
        value={number2}
      />
      <TouchableOpacity style={styles.button} onPress={addNumbers}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={subtractNumbers}>
        <Text style={styles.buttonText}>Subtract</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2196f3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Calculator;
