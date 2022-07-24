import * as React from 'react';
import {Text, TextProps} from 'react-native';

export function IosBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, {fontFamily: 'ios-bold'}]} />;
}

export function IosRegularText(props: TextProps) {
  return <Text {...props} style={[props.style, {fontFamily: 'ios-regular'}]} />;
}
