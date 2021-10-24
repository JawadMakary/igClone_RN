import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddNewPost from "../components/Home/newPost/AddNewPost";

export default function NewPostScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <AddNewPost />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
