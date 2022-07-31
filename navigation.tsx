import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, Text} from 'react-native';

import ToDoListScreen from './screens/ToDoListScreen';
import SelectCategoryScreen from './screens/SelectCategoryScreen';
import {RootStackParamList} from './types';

import GraphIcon from './assets/icons/graph.svg';
import HamburgerIcon from './assets/icons/hamburger.svg';
import Layout from './constants/Layout';
import Colors from './constants/Colors';
import AddCategoryScreen from './screens/AddCategoryScreen';

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
          title: '',
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerLeft: () => (
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
                marginLeft: Layout.Width * 0.03,
              })}>
              <GraphIcon />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight: Layout.Width * 0.03,
              })}>
              <HamburgerIcon />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="SelectCategory"
        component={SelectCategoryScreen}
        options={{
          headerShadowVisible: false,
          title: '',
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTitle: () => (
            <Text
              style={{
                color: Colors.black,
                fontSize: Layout.FontScale * 28,
                fontWeight: 'bold',
              }}>
              할 일 추가
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategoryScreen}
        options={{
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
