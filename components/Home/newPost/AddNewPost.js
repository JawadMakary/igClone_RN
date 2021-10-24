import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddNewPost() {
  return (
    <View style={styles.container}>
      <Header />
      {/* PostForm */}
    </View>
  );
}
const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={{ color: "#fff" }}>ADD NEW POST</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
