import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";

export default function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <AddNewPost navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
