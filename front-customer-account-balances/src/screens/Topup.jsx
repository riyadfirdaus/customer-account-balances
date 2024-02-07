import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const TopupScreen = () => {
  const [amount, setAmount] = useState("0");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={styles.input}
        onChange={(text) => setAmount(text)}
        value={amount}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Topup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },

  button: {
    backgroundColor: "#E64A19",
    width: "auto",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
