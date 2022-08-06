import * as React from 'react';
import {ColorValue, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Layout from '../constants/Layout';

export default function ProfileIcon(props: {color: ColorValue}) {
  return (
    <View
      style={{
        marginRight: Layout.Width * 0.046,
        width: Layout.Width * 0.06,
        height: Layout.Width * 0.06,
        borderRadius: Layout.Width * 0.06,
        backgroundColor: props.color,
      }}
    />
  );
}
