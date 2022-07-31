import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Layout from '../constants/Layout';
import {RootStackScreenProps} from '../types';

export default function AddCategoryScreen({
  navigation,
}: RootStackScreenProps<'AddCategory'>) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.Width * 0.07,
  },
});
