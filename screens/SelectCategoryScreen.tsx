import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import AddIcon from '../assets/icons/add.svg';
import {RootStackScreenProps} from '../types';

import Category from '../components/Category';

import Animal from '../assets/icons/animal.svg';
import Baby from '../assets/icons/baby.svg';
import Bank from '../assets/icons/bank.svg';
import Clean from '../assets/icons/clean.svg';
import Clothes from '../assets/icons/clothes.svg';
import Meal from '../assets/icons/meal.svg';
import Trash from '../assets/icons/trash.svg';
import {useRecoilState} from 'recoil';
import {ICategoryTypes, categoryList} from '../store/atoms/todo';

// const categoryList = [
//   {
//     id: 0,
//     title: '의류',
//     color: Colors.yellow,
//     detail: '빨래 널기, 빨래 개기, 다림질, 바느질',
//     icon: <Clothes />,
//   },
//   {
//     id: 1,
//     title: '청소',
//     color: Colors.pink,
//     detail: '방 청소, 거실 청소, 욕실 청소, 대청소',
//     icon: <Clean />,
//   },
//   {
//     id: 2,
//     title: '쓰레기 배출',
//     color: Colors.skyblue,
//     detail: '일반 쓰레기, 음식물 쓰레기, 재활용 쓰레기',
//     icon: <Trash />,
//   },
//   {
//     id: 3,
//     title: '식사',
//     color: Colors.purple,
//     detail: '장보기, 요리하기, 설거지, 식탁 닦기',
//     icon: <Meal />,
//   },
//   {
//     id: 4,
//     title: '반려동물/식물',
//     color: Colors.green,
//     detail: '물 주기, 밥 주기, 간식 주기, 산책하기',
//     icon: <Animal />,
//   },
//   {
//     id: 5,
//     title: '육아',
//     color: Colors.beige,
//     detail: '학교 등/하교, 학원 등/하원, 놀이터',
//     icon: <Baby />,
//   },
//   {
//     id: 6,
//     title: '기타',
//     color: Colors.navy,
//     detail: '가계부 정리, 은행 방문, 관공서 방문',
//     icon: <Bank />,
//   },
// ];

export default function SelectCategoryScreen({
  navigation,
}: RootStackScreenProps<'SelectCategory'>) {
  const [categories, setCategories] =
    useRecoilState<ICategoryTypes[]>(categoryList);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.black,
          fontSize: Layout.FontScale * 24,
          fontWeight: 'normal',
          marginVertical: Layout.Height * 0.03,
        }}>
        카테고리 선택
      </Text>
      <ScrollView>
        {categories.map(item => (
          <Category
            key={item.title}
            title={item.title}
            color={item.color}
            detail={item.detail}
            icon={item.icon}
            onPress={() =>
              navigation.navigate('AddToDo', {category: item.title})
            }
          />
        ))}
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.055,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.lightGray,
            borderRadius: 15,
            paddingHorizontal: Layout.Width * 0.03,
            marginVertical: Layout.Height * 0.01,
          })}
          onPress={() => navigation.navigate('AddCategory')}>
          <View
            style={{
              width: Layout.Width * 0.07,
              height: Layout.Width * 0.07,
              borderRadius: Layout.Width * 0.07,
              backgroundColor: Colors.black,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AddIcon width={Layout.Width * 0.04} />
          </View>

          <Text
            style={{
              color: Colors.black,
              fontSize: Layout.FontScale * 18,
              fontWeight: 'bold',
              marginLeft: Layout.Width * 0.03,
            }}>
            카테고리 추가
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.Width * 0.07,
  },
});
