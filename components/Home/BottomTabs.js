import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
