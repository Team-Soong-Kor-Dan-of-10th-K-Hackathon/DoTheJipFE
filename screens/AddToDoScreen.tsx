import 'moment/locale/ko';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import * as React from 'react';
import {useState} from 'react';

import Repeat from '../assets/icons/repeat.svg';
import Memo from '../assets/icons/memo.svg';
import Coupon from '../assets/icons/coupon.svg';
import Alarm from '../assets/icons/alarm.svg';
import Circle from '../assets/icons/circle.svg';
import Calendar from '../assets/icons/calendar.svg';

import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {RootStackScreenProps} from '../types';

export default function AddToDoScreen({
  navigation,
}: RootStackScreenProps<'AddToDo'>) {
  const [date, setDate] = useState(new Date());
  const [openDate, setDateOpen] = useState(false);
  const [TodoVisible, setTodoVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [openUser, setUserOpen] = useState(false);
  const [openTodo, setTodoOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [valueUser, setUserValue] = useState(null);
  const [valueTodo, setTodoValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: '알림 설정',
      value: 0,
      icon: () => <Alarm style={{width: 24, height: 24}} />,
    },
    {
      label: '반복 설정',
      value: 1,
      icon: () => <Repeat style={{width: 24, height: 24}} />,
    },
    {
      label: '쿠폰 여부',
      value: 2,
      icon: () => <Coupon style={{width: 24, height: 24}} />,
    },
    {
      label: '메모',
      value: 3,
      icon: () => <Memo style={{width: 24, height: 24}} />,
    },
  ]);
  const [Todoitems, setTodoItems] = useState([
    {
      label: '빨래 널기',
      value: 0,
    },
    {
      label: '빨래 개기',
      value: 1,
    },
    {
      label: '세탁기 돌리기',
      value: 2,
    },
    {
      label: '다림질 하기',
      value: 3,
    },
    {
      label: '바느질 하기',
      value: 4,
    },
    {
      label: '수선집 다녀오기',
      value: 5,
    },
  ]);
  const [user, setUser] = useState([
    {
      label: '아빠',
      value: 0,
      icon: () => <Circle style={{width: 24, height: 24}} />,
    },
    {
      label: '엄마',
      value: 1,
      icon: () => <Circle style={{width: 24, height: 24}} />,
    },
  ]);
  const onTodoOpen = React.useCallback(() => {
    setOpen(false);
    setUserOpen(false);
  }, []);
  const onUserOpen = React.useCallback(() => {
    setTodoOpen(false);
    setOpen(false);
  }, []);
  const onExtraOpen = React.useCallback(() => {
    setTodoOpen(false);
    setUserOpen(false);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginVertical: 39}}>상세설정</Text>
      {/* <TouchableOpacity ref={DropdownButton} style={{height:50,width:'90%'} } onPress={TodoToggleDrop}>
            <Text style={{flex:1}}>선택</Text>
            {renderTodoToggle()}
        </TouchableOpacity> */}
      <DropDownPicker
        open={openTodo}
        value={valueTodo}
        items={Todoitems}
        onOpen={onTodoOpen}
        setOpen={setTodoOpen}
        setValue={setTodoValue}
        setItems={setTodoItems}
        style={{
          width: Layout.Width * 0.86,
          backgroundColor: 'white',
          borderColor: 'white',
          borderBottomColor: '#EBEBEB',
          marginBottom: 18,
        }}
        placeholder={'할 일 직접 입력'}
        textStyle={{fontSize: 18}}
        zIndex={3000}
        zIndexInverse={1000}
        dropDownContainerStyle={{
          backgroundColor: 'white',
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setDateOpen(true);
        }}>
        <View
          style={{
            width: Layout.Width * 0.86,
            height: 48,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 10,
            flexDirection: 'row',
          }}>
          <Calendar style={{width: 24, height: 24, marginRight: 15}} />
          <Text style={{fontSize: 18}}>
            {moment(date).format('YYYY-MM-DD')}
          </Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        date={date}
        mode={'date'}
        open={openDate}
        onConfirm={date => {
          setDate(date);
          setDateOpen(false);
        }}
        onCancel={() => {
          setDateOpen(false);
        }}
      />
      <DropDownPicker
        open={openUser}
        value={valueUser}
        items={user}
        onOpen={onUserOpen}
        setOpen={setUserOpen}
        setValue={setUserValue}
        setItems={setUser}
        style={{
          width: Layout.Width * 0.86,
          backgroundColor: Colors.lightGray,
          borderColor: 'white',
          marginBottom: 18,
        }}
        placeholder={'담당자'}
        textStyle={{fontSize: 18}}
        zIndex={2000}
        zIndexInverse={2000}
        dropDownContainerStyle={{
          backgroundColor: Colors.lightGray,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        onOpen={onExtraOpen}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          backgroundColor: Colors.lightGray,
          borderColor: 'white',
          width: Layout.Width * 0.86,
        }}
        placeholder={'추가 설정'}
        textStyle={{fontSize: 18}}
        zIndex={1000}
        zIndexInverse={3000}
        dropDownContainerStyle={{
          backgroundColor: Colors.lightGray,
        }}
      />
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
