import * as React from 'react';
import {useState} from 'react';
import { View, Text,  StyleSheet, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types';


const categoryList = [
    {
        id : 0,
        title : '의류', 
        color : Colors.yellow, 
        detail : '빨래 널기, 빨래 개기, 다림질, 바느질', 
        icon : ''
    },
    {  
        id : 1,
        title : '청소',
        color : Colors.pink,
        detail : '방 청소, 거실 청소, 욕실 청소, 대청소',
        icon : ''
    },
    {   
        id : 2,
        title: '쓰레기 배출',
        color : Colors.skyblue,
        detail : '일반 쓰레기, 음식물 쓰레기, 재활용 쓰레기',
        icon : ''
    },
    {   
        id : 3,
        title : '식사',
        color : Colors.purple,
        detail : '장보기, 요리하기, 설거지, 식탁 닦기',
        icon : ''
    },
    {   
        id : 4,
        title : '반려동물/식물',
        color : Colors.green,
        detail : '물 주기, 밥 주기, 간식 주기, 산책하기',
        icon : ''
    },
    {
        id : 5,
        title : '육아',
        color : Colors.green,
        detail : '학교 등/하교, 학원 등/하원, 놀이터',
        icon : ''
    },
    {
        id : 6,
        title : '기타',
        color : Colors.navy,
        detail : '가계부 정리, 은행 방문, 관공서 방문',
        icon : ''
    }
]

export default function AddToDoCategoryScreen({navigation,}:RootStackScreenProps<'AddToDoCategoryScreen'>) {
    
    return ( <View style={styles.container}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 28,
            fontWeight: 'bold',
          }}>
          할 일 추가
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'normal',
          }}>
          카테고리 선택
        </Text>
        <ScrollView>
      {categoryList.map(category => (
        <CategoryListItem {...category} />
      ))}
      <View style={{
        width: Layout.Width * 0.86,
        height: Layout.Height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
        paddingHorizontal: Layout.Width * 0.03,
        marginVertical: Layout.Height * 0.01,
        justifyContent: 'flex-start',
      }}>
        <Text style={{     
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold'
            }}>카테고리 추가</Text>
      </View>
    </ScrollView>
        </View>);
}
const CategoryListItem = ({title, color, detail, icon, id}) => {
    return (
      <View style={{
        width: Layout.Width * 0.86,
        height: Layout.Height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: 15,
        paddingHorizontal: Layout.Width * 0.03,
        marginVertical: Layout.Height * 0.01,
        justifyContent: 'flex-start',
      }}>
        <Text style={{     
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold'
            }}>{title}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      width: Layout.Width,
      height: Layout.Height,
      backgroundColor: Colors.white,
      paddingHorizontal: Layout.Width * 0.07,
    },
  });
  