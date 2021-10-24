import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="homeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="newPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
