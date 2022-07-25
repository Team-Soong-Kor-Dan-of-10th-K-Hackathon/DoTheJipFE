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
import React, {Suspense, useEffect} from 'react';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(()=>{
    try{
      setTimeout(()=>{
        SplashScreen.hide()
      },1000);
    }catch(e){
      console.warn('Error Occur')
    }
  },[]);
  
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
