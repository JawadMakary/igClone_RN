import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => (
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
export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="loginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="signUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
