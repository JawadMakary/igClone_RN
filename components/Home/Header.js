import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.988a69e0d56c8a348f9e3e5337845bd2?rik=HmNemvm8zTGtag&pid=ImgRaw&r=0",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.b6ef5d0b91a55520a0ccd9b3e4865626?rik=B9FFgMopaNZbWQ&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1707272.png&ehk=qkh7ebv6bcW1qVC3OmCCf1AVLuMTxNK%2foILSmYW%2fZho%3d&risl=&pid=ImgRaw&r=0",
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
              uri: "https://th.bing.com/th/id/R.f54e3578afef4f3120724313b6207b78?rik=SrHzmad4BNuzjg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fwhite-email-icon-transparent_249395.png&ehk=l89VTQ3nQSPzERuKzyGrzeF1Gr5lpuphZntDMzsnjYc%3d&risl=&pid=ImgRaw&r=0",
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
