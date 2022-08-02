import 'moment/locale/ko';
import {
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import ToDo from '../components/ToDo';

import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import * as React from 'react';
import {useState} from 'react';

import AddIcon from '../assets/icons/add.svg';
import {RootStackScreenProps} from '../types';

const ToDoList = [
  {
    title: '의류',
    data: [
      {
        todo: '세탁기 돌리기',
        who: '아빠',
        done: false,
      },
      {
        todo: '빨래 널기',
        who: '엄마',
        done: true,
      },
    ],
  },
  {
    title: '청소',
    data: [
      {
        todo: '거실 청소',
        who: '아들',
        done: true,
      },
    ],
  },
  {
    title: '쓰레기 배출',
    data: [
      {
        todo: '재활용 쓰레기 분리수거',
        who: '딸',
        done: false,
      },
      {
        todo: '음식물 쓰레기 버리기',
        who: '엄마',
        done: true,
      },
    ],
  },
];

function filterToDoList(list: typeof ToDoList) {
  const filteredToDoList = [];
  for (var i = 0; i < ToDoList.length; i++) {
    if (list[i].data.filter(item => item.who == '아들').length > 0)
      filteredToDoList.push({
        title: list[i].title,
        data: list[i].data.filter(item => item.who == '아들'),
      });
  }
  return filteredToDoList;
}

export default function ToDoListScreen({
  navigation,
}: RootStackScreenProps<'ToDoList'>) {
  const [date, setDate] = useState(new Date());
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.black,
          fontSize: Layout.FontScale * 28,
          fontWeight: 'bold',
        }}>
        {date.getMonth() + 1}월 {date.getDate()}일
      </Text>
      <ReactNativeCalendarStrip
        scrollable={true}
        scrollerPaging={true}
        onDateSelected={date => setDate(date.toDate())}
        selectedDate={date}
        showMonth={false}
        calendarColor={Colors.white}
        style={{
          height: Layout.Height * 0.08,
        }}
        dateNameStyle={{
          color: Colors.black,
          fontSize: Layout.FontScale * 15,
        }}
        dateNumberStyle={{
          color: Colors.deepGray,
          fontSize: Layout.FontScale * 24,
          fontWeight: 'bold',
        }}
        highlightDateNameStyle={{
          color: Colors.black,
          fontSize: Layout.FontScale * 15,
        }}
        highlightDateNumberStyle={{
          color: Colors.black,
          fontSize: Layout.FontScale * 24,
        }}
        daySelectionAnimation={{
          duration: 80,
          type: 'background',
          highlightColor: Colors.yellow,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 24,
            fontWeight: 'bold',
          }}>
          {index < 1 ? '김씨네  ' : '막냉이  '}
        </Text>
        <Text style={{color: Colors.black, fontSize: Layout.FontScale * 12}}>
          {index < 1 ? 'Lv.3' : 'Lv.5'}
        </Text>
      </View>

      <Text
        style={{
          color: Colors.black,
          fontSize: Layout.FontScale * 15,
          marginTop: 10,
        }}>
        {index < 1 ? '가족 집안일 달성률' : '나의 집안일 달성률'}
      </Text>
      <View
        style={{
          width: Layout.Width * 0.86,
          height: Layout.Height * 0.03,
          backgroundColor: Colors.darkGray,
          borderRadius: 10,
          marginVertical: 10,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: index < 1 ? Layout.Width * 0.86 * 0.6 : Layout.Width * 0.86,
            height: Layout.Height * 0.03,
            backgroundColor: index < 1 ? Colors.yellow : Colors.green,
            borderRadius: 10,
            position: 'absolute',
          }}
        />
        <Text
          style={{
            color: Colors.white,
            fontSize: Layout.FontScale * 15,
            textAlign: 'center',
          }}>
          {index < 1 ? '60 %' : '100%'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: Layout.Width * 0.43,
            height: Layout.Height * 0.05,
            borderBottomColor: index < 1 ? Colors.yellow : Colors.darkGray,
            borderBottomWidth: 2,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginBottom: Layout.Height * 0.01,
          }}>
          <Text
            style={{
              color: index < 1 ? Colors.black : Colors.darkGray,
              fontSize: Layout.FontScale * 15,
              fontWeight: 'bold',
            }}>
            가족할일
          </Text>
        </View>
        <View
          style={{
            width: Layout.Width * 0.43,
            height: Layout.Height * 0.05,
            borderBottomColor: index > 0 ? Colors.yellow : Colors.darkGray,
            borderBottomWidth: 2,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: index > 0 ? Colors.black : Colors.darkGray,
              fontSize: Layout.FontScale * 15,
              fontWeight: 'bold',
            }}>
            내가할일
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        decelerationRate={'normal'}
        snapToInterval={Layout.Width * 0.86}
        pagingEnabled={true}
        onScroll={e => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / (Layout.Width * 0.86),
          );
          setIndex(newIndex);
        }}>
        <SectionList
          sections={ToDoList}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                color: Colors.black,
                fontSize: Layout.FontScale * 18,
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
          )}
          renderItem={({item}) => (
            <ToDo todo={item.todo} who={item.who} done={item.done} />
          )}
        />
        <SectionList
          sections={filterToDoList(ToDoList)}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{color: Colors.black, fontSize: Layout.FontScale * 18}}>
              {title}
            </Text>
          )}
          renderItem={({item}) => (
            <ToDo todo={item.todo} who={item.who} done={item.done} />
          )}
        />
      </ScrollView>
      <Pressable
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1,
          position: 'absolute',
          bottom: Layout.Height * 0.18,
          right: Layout.Width * 0.07,
          width: Layout.Width * 0.15,
          height: Layout.Width * 0.15,
          borderRadius: Layout.Width * 0.15,
          backgroundColor: Colors.yellow,
          justifyContent: 'center',
          alignItems: 'center',
        })}
        onPress={() => navigation.navigate('SelectCategory')}>
        <AddIcon />
      </Pressable>
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
