import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import toRupiah from "../Rupiah";
import { Image } from "react-native-web";

const Balance = ({ data, navigation }) => {
  console.log(navigation, "nav");
  return (
    <ImageBackground
      source={{ uri: "../../assets/card-background.png" }}
      style={styles.container}
      imageStyle={{ borderRadius: 18 }}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.title, styles.white]}>
          Hi, {data.name}. Saldo anda:
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Topup");
          }}
        >
          <Text style={styles.white}>Topup</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {toRupiah(data.balance)}
      </Text>
    </ImageBackground>
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
  white: { color: "white" },
  button: {
    backgroundColor: "#FFFFFF",
    width: "auto",
    borderRadius: 10,
  },
});
