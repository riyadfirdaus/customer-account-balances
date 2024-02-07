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
      <Text style={styles.header}>Top up your balance</Text>
      <View style={styles.topUpContainer}>
        <TextInput
          style={styles.input}
          onChange={(text) => setAmount(text)}
          value={amount}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Topup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  topUpContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    gap: 12,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
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
