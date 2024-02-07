import { View, Text, StyleSheet } from "react-native";
import React from "react";
import balanceData from "../../data/Balance.json";
import transactionData from "../../data/transaction.json";
import Balance from "../components/Balance";
import CardTransaction from "../components/CardTransaction";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Balance data={balanceData} navigation={navigation} />

      <Text>Transaction History</Text>
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
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20 },
  balanceContainer: { padding: 20 },
});
