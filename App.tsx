/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import Colors from './constants/Colors';
import {StatusBar, View, Text, useColorScheme} from 'react-native';
import React, {Suspense} from 'react';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <Suspense
        fallback={
          <View>
            <Text>Loading...</Text>
          </View>
        }>
        <Navigation />
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      </Suspense>
    </RecoilRoot>
  );
}
