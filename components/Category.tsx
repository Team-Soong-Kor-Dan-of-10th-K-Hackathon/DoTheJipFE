import * as React from 'react';
import {
  View,
  Text,
  Pressable,
  ColorValue,
  GestureResponderEvent,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function Category(props: {
  title: string;
  color: ColorValue;
  detail: string;
  icon: JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      style={({pressed}) => ({
        opacity: pressed ? 0.5 : 1,
        width: Layout.Width * 0.86,
        height: Layout.Height * 0.055,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.color,
        borderRadius: 15,
        paddingHorizontal: Layout.Width * 0.03,
        marginVertical: Layout.Height * 0.01,
        justifyContent: 'space-between',
      })}
      onPress={props.onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {props.icon}
        <Text
          style={{
            color: props.title == '기타' ? Colors.white : Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold',
            marginLeft: Layout.Width * 0.03,
          }}>
          {props.title}
        </Text>
      </View>
      <Text
        style={{
          color: props.title == '기타' ? Colors.white : Colors.black,
          fontSize: Layout.FontScale * 12,
        }}>
        {props.detail}
      </Text>
    </Pressable>
  );
}
