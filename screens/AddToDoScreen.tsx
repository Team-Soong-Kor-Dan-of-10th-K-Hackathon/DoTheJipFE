import 'moment/locale/ko';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import * as React from 'react';
import {useState} from 'react';

import Repeat from '../assets/icons/repeat.svg';
import Memo from '../assets/icons/memo.svg';
import Coupon from '../assets/icons/coupon.svg';
import Alarm from '../assets/icons/alarm.svg';
import Check from '../assets/icons/check.svg';
import Calendar from '../assets/icons/calendar.svg';
import ProfileIcon from '../components/ProfileIcon';

import DatePicker from 'react-native-date-picker';
import {RootStackScreenProps} from '../types';

export default function AddToDoScreen({
  navigation,
  route,
}: RootStackScreenProps<'AddToDo'>) {
  const [date, setDate] = useState(new Date());
  const [openDate, setDateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    key: '',
    label: '',
    value: 0,
    color: Colors.darkGray,
    icon: () => <ProfileIcon color={Colors.darkGray} />,
  });
  const [color, setColor] = useState(Colors.darkGray);
  const [who, setWho] = useState('담당자');
  const [whoModalVisible, setWhoModalVisible] = useState(false);
  const [disabled, setDisabled] = useState(selectedUser.label === '');
  const users = [
    {
      key: '김아빠',
      label: '김아빠',
      value: 0,
      color: Colors.skyblue,
      icon: () => <ProfileIcon color={Colors.skyblue} />,
    },
    {
      key: '마미',
      label: '마미',
      value: 1,
      color: Colors.purple,
      icon: () => <ProfileIcon color={Colors.purple} />,
    },
    {
      key: '김공주',
      label: '김공주',
      value: 1,
      color: Colors.pink,
      icon: () => <ProfileIcon color={Colors.pink} />,
    },
    {
      key: '막냉이',
      label: '막냉이',
      value: 1,
      color: Colors.green,
      icon: () => <ProfileIcon color={Colors.green} />,
    },
  ];

  return (
    <>
      <Modal
        visible={whoModalVisible}
        animationType={'fade'}
        transparent={true}
        statusBarTranslucent={true}>
        <TouchableWithoutFeedback onPress={() => setWhoModalVisible(false)}>
          <View
            style={{
              width: Layout.Width,
              height: Layout.Height,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            width: Layout.Width,
            height: Layout.Height * 0.5,
            backgroundColor: Colors.white,
            position: 'absolute',
            top: Layout.Height * 0.5,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingVertical: Layout.Height * 0.05,
            paddingHorizontal: Layout.Width * 0.07,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: Layout.FontScale * 24,
            }}>
            담당자 선택
          </Text>
          <View
            style={{
              marginTop: Layout.Height * 0.03,
            }}>
            {users.map(item => (
              <Pressable
                onPress={() => {
                  setSelectedUser(item);
                  setDisabled(false);
                }}
                style={{
                  height: Layout.Height * 0.04,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: Layout.Height * 0.01,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <ProfileIcon color={item.color} />
                  <Text
                    style={{
                      fontSize: Layout.FontScale * 18,
                      color: Colors.black,
                    }}>
                    {item.label}
                  </Text>
                </View>
                {selectedUser.label === item.label ? (
                  <View
                    style={{
                      borderRadius: 5,
                      backgroundColor: Colors.yellow,
                    }}>
                    <Check />
                  </View>
                ) : undefined}
              </Pressable>
            ))}
          </View>
          <Pressable
            disabled={disabled}
            onPress={() => {
              setWhoModalVisible(false);
              setWho(selectedUser.label);
              setColor(selectedUser.color);
            }}
            style={({pressed}) => ({
              position: 'absolute',
              bottom: Layout.AndroidBottomBarHeight,
              opacity: pressed ? 0.5 : 1,
              width: Layout.Width,
              height: Layout.Height * 0.06,
              backgroundColor:
                selectedUser.label === '' ? Colors.lightGray : Colors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
            })}>
            <Text
              style={{
                color: Colors.black,
                fontSize: Layout.FontScale * 18,
                fontWeight: 'bold',
              }}>
              완료
            </Text>
          </Pressable>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 24,
            fontWeight: 'normal',
            marginVertical: Layout.Height * 0.03,
          }}>
          상세설정
        </Text>

        <Pressable
          onPress={() => {
            setDateOpen(true);
          }}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
          })}>
          <Calendar style={{marginRight: Layout.Width * 0.046}} />
          <Text style={{color: Colors.black, fontSize: 18}}>
            {moment(date).format('YYYY-MM-DD')}
          </Text>
        </Pressable>
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
        <Pressable
          onPress={() => setWhoModalVisible(true)}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
          })}>
          <ProfileIcon color={color} />
          <Text
            style={{
              color: who == '담당자' ? Colors.deepGray : Colors.black,
              fontSize: Layout.FontScale * 18,
            }}>
            {who}
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Alarm style={{marginRight: Layout.Width * 0.046}} />
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 18,
            }}>
            알림 설정
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Repeat style={{marginRight: Layout.Width * 0.046}} />
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 18,
            }}>
            반복 설정
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Coupon style={{marginRight: Layout.Width * 0.046}} />
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 18,
            }}>
            쿠폰
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: Layout.Width * 0.86,
            height: Layout.Height * 0.05,
            backgroundColor: Colors.lightGray,
            marginBottom: 18,
            borderRadius: 5,
            paddingHorizontal: Layout.Width * 0.03,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Memo
            style={{
              marginRight: Layout.Width * 0.046,
            }}
          />
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 18,
            }}>
            메모 추가
          </Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.navigate('ToDoList')}
        style={({pressed}) => ({
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.5,
          height: Layout.Height * 0.06,
          backgroundColor: Colors.lightGray,
          justifyContent: 'center',
          alignItems: 'center',
        })}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold',
          }}>
          취소
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ToDoList')}
        style={({pressed}) => ({
          position: 'absolute',
          bottom: 0,
          right: 0,
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.5,
          height: Layout.Height * 0.06,
          backgroundColor: Colors.yellow,
          justifyContent: 'center',
          alignItems: 'center',
        })}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold',
          }}>
          저장
        </Text>
      </Pressable>
    </>
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
