import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

import toRupiah from "../Rupiah";

const CardTransaction = ({ name, description, amount, type }) => {
  const green = "#4CAF50";
  const red = "#FF7043";
  const [textColor, setTextColor] = useState(green);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (type == "IN") {
      setTextColor(green);
      setIcon("../../assets/up.png");
    } else {
      setTextColor(red);
      setIcon("../../assets/down.png");
    }
  });

  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Image source={{ uri: icon, width: 32, height: 32 }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <Text style={{ color: textColor }}>{toRupiah(amount)}</Text>
    </View>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  title: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 20,
    marginVertical: 4,
  },
});
