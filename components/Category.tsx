import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ColorValue,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import Animal from '../assets/icons/animal.svg';
import Baby from '../assets/icons/baby.svg';
import Bank from '../assets/icons/bank.svg';
import Clean from '../assets/icons/clean.svg';
import Clothes from '../assets/icons/clothes.svg';
import Meal from '../assets/icons/meal.svg';
import Trash from '../assets/icons/trash.svg';
import {RootStackScreenProps} from '../types';

export default function CategoryListItem(
  props: {
    title: string;
    color: ColorValue;
    detail: string;
  },
  {navigation}: RootStackScreenProps<'SelectCategory'>,
) {
  function iconSwitch(): any {
    switch (props.title) {
      case '의류':
        return <Clothes />;
      case '청소':
        return <Clean />;
      case '쓰레기 배출':
        return <Trash />;
      case '식사':
        return <Meal />;
      case '반려동물/식물':
        return <Animal />;
      case '육아':
        return <Baby />;
      case '기타':
        return <Bank />;
    }
  }
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
      // onPress={() => navigation.navigate('김자헌이 만든 페이지')}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {iconSwitch()}
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
