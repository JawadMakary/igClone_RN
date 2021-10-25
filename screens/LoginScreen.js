import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/login/LoginForm";
const IG_LOGO =
  "https://th.bing.com/th/id/R.b6202fffe96c1a2d24d50ffb5f0c99b5?rik=eRXKzNvU%2bPhXHQ&pid=ImgRaw&r=0";
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: IG_LOGO, width: 100, height: 100 }} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
