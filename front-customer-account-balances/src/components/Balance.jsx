import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import toRupiah from "../Rupiah";

const Balance = ({ data, navigation }) => {
  console.log(navigation, "nav");
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Hi, {data.name}. Saldo anda:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Topup");
          }}
        >
          <Text>Topup</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {toRupiah(data.balance)}
      </Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  title: { fontSize: 14, color: "#1E1E1E" },
});
