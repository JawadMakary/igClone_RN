import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import BottomTabs, { bottomTabsIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabsIcons} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
