import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { USERS } from "../../data/users";
const Stories = () => {
  return (
    <View style={{ marginBottom: 13, alignItems: "center" }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, i) => (
          <View key={i} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text
              style={{
                color: "#fff",
              }}
            >
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
