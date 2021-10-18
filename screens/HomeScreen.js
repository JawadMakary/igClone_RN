import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
