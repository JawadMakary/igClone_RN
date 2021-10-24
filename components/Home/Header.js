import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("newPostScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/plus.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/like.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>10</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/speech-bubble-with-dots.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: "13%",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 6,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  unreadBadgeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
