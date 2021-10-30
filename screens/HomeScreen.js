import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import BottomTabs, { bottomTabsIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";
import { db } from "../firebase";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // collectionGroup--->posts--> subCollection in users
    //  one specific user can have a collection of posts that he owns
    //  each post subcollection can have caption,comment for example
    db.collectionGroup("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((posts, index) => (
          <Post post={posts} key={index} />
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
