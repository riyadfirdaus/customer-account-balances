import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardTransaction = ({ name, description, amount, type }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
      <Text>{amount}</Text>
    </View>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 20,
    marginVertical: 4,
  },
});
