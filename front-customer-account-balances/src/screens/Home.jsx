import { View, Text, StyleSheet } from "react-native";
import React from "react";
import balanceData from "../../data/Balance.json";
import transactionData from "../../data/transaction.json";
import Balance from "../components/Balance";
import CardTransaction from "../components/CardTransaction";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.balanceContainer}>
        <Text style={styles.header}>Balance</Text>
        <Balance data={balanceData} navigation={navigation} />
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.header}>Transaction History</Text>
        {transactionData.map((item, index) => (
          <CardTransaction
            name={item.name}
            description={item.description}
            amount={item.amount}
            type={item.type}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20 },
  balanceContainer: {},
  transactionContainer: {
    marginVertical: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
