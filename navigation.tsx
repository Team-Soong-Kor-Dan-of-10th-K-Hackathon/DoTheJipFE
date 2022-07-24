import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import ToDoListScreen from "./screens/ToDoListScreen";
import { RootStackParamList } from "./types";

import GraphIcon from "./assets/icons/graph.svg";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import Layout from "./constants/Layout";
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ToDoList"
        component={ToDoListScreen}
        options={{
          headerShadowVisible: false,
          title: "",
          headerLeft: () => (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginLeft: Layout.Width * 0.03,
              })}
            >
              <GraphIcon />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight: Layout.Width * 0.03,
              })}
            >
              <HamburgerIcon />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
