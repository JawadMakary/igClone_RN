import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/search.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/streaming-video.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/streaming-video.png",
  },
  {
    name: "Shop",
    active:
      " https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag--v1.png",
  },

  {
    name: "Profile",
    active: "https://avatars.githubusercontent.com/u/69002670?v=4",
    inactive:
      "https://i.egycdn.com/pic/WmFwZndlY3ZOVFlqbXZtakVjbVRibUdOYm1FY2t3.jpg",
  },
];
export default function BottomTabs({ icons }) {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[styles.icon, icon.name == "Profile" ? styles.profilePic : null]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: {
    borderRadius: 50,
    borderColor: "#fff",
  },
});
