import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  };

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
      <Text>{name}</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MyForm;
