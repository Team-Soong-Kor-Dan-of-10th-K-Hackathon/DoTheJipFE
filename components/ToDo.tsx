import * as React from 'react';
import {useState} from 'react';
import {
  Pressable,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native';
import moment from 'moment';
import Collapsible from 'react-native-collapsible';
import Repeat from '../assets/icons/repeat.svg';
import Memo from '../assets/icons/memo.svg';
import Coupon from '../assets/icons/coupon.svg';
import Alarm from '../assets/icons/alarm.svg';
import Check from '../assets/icons/check.svg';
import Calendar from '../assets/icons/calendar.svg';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import ProfileIcon from './ProfileIcon';

import CheckBox from '../assets/icons/check.svg';
import {ITodoTypes} from '../store/atoms/todo';
import {SetterOrUpdater} from 'recoil';
import DatePicker from 'react-native-date-picker';

interface PropTypes {
  id: number;
  todo: string;
  who: string;
  category: string;
  done: boolean;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

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

export default function ToDo({
  id,
  todo,
  who,
  category,
  done,
  onDone,
  onDelete,
  todos,
  setTodos,
}: PropTypes) {
  const [modalVisible, setModalVisible] = useState(false);
  const [titleFieldFocused, setTitleFieldFocused] = useState(false);
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [openDate, setDateOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    key: '',
    label: who,
    value: 0,
    color: Colors.darkGray,
    icon: () => <ProfileIcon color={Colors.darkGray} />,
  });
  const [color, setColor] = useState(Colors.black);
  const [whos, setWho] = useState(who);
  const [whoModalVisible, setWhoModalVisible] = useState(false);

  React.useEffect(() => {
    setColor(() => {
      if (who == '김아빠') {
        return Colors.skyblue;
      } else if (who == '막냉이') {
        return Colors.green;
      } else if (who == '마미') {
        return Colors.purple;
      } else if (who == '김공주') {
        return Colors.pink;
      }
      return Colors.black;
    });
  }, []);

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        statusBarTranslucent={true}>
        <TouchableWithoutFeedback
          onPress={() => {
            setEditable(false);
            setModalVisible(false);
          }}>
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
            height: Layout.Height * 0.75,
            backgroundColor: Colors.white,
            position: 'absolute',
            top: Layout.Height * 0.25,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: Layout.Width * 0.07,
            paddingVertical: Layout.Height * 0.05,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: Layout.Height * 0.02,
            }}>
            {category}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: Layout.Height * 0.05,
              borderBottomWidth: 2,
              borderBottomColor: editable
                ? titleFieldFocused
                  ? Colors.yellow
                  : Colors.darkGray
                : Colors.darkGray,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <TextInput
              value={todo}
              placeholder={todo}
              placeholderTextColor={Colors.deepGray}
              editable={editable}
              style={{
                color: Colors.black,
                fontSize: Layout.FontScale * 18,
              }}
              onFocus={() => setTitleFieldFocused(true)}
              onBlur={() => setTitleFieldFocused(false)}
              returnKeyType="next"
            />
          </View>
          <Pressable
            onPress={() => {
              if (editable) setDateOpen(true);
            }}
            style={({pressed}) => ({
              opacity: editable ? (pressed ? 0.5 : 1) : 1,
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
            onPress={() => {
              if (editable) setWhoModalVisible(true);
            }}
            style={({pressed}) => ({
              opacity: editable ? (pressed ? 0.5 : 1) : 1,
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
              {whos}
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
              알림 없음
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
              반복 없음
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
              쿠폰 없음
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
              메모 없음
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (editable) setEditable(false);
            }}
            style={({pressed}) => ({
              position: 'absolute',
              bottom: Layout.AndroidBottomBarHeight,
              left: 0,
              opacity: pressed ? 0.5 : 1,
              width: Layout.Width * 0.5,
              height:
                Platform.OS == 'ios'
                  ? Layout.Height * 0.07
                  : Layout.Height * 0.06,
              backgroundColor: Colors.lightGray,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: Platform.OS == 'ios' ? Layout.Height * 0.01 : 0,
            })}>
            <Text
              style={{
                color: Colors.red,
                fontSize: Layout.FontScale * 18,
                fontWeight: 'bold',
              }}>
              {editable ? '취소' : '삭제'}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (editable) {
                // 편집 된 내용을 저장하고 투두 정보를 새로 불러옴
                setEditable(false);
              } else setEditable(true);
            }}
            style={({pressed}) => ({
              position: 'absolute',
              bottom: Layout.AndroidBottomBarHeight,
              right: 0,
              opacity: pressed ? 0.5 : 1,
              width: Layout.Width * 0.5,
              height:
                Platform.OS == 'ios'
                  ? Layout.Height * 0.07
                  : Layout.Height * 0.06,
              backgroundColor: Colors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: Platform.OS == 'ios' ? Layout.Height * 0.01 : 0,
            })}>
            <Text
              style={{
                color: Colors.black,
                fontSize: Layout.FontScale * 18,
                fontWeight: 'bold',
              }}>
              {editable ? '저장' : '편집'}
            </Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.86,
          height: Layout.Height * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.lightGray,
          borderRadius: 15,
          paddingHorizontal: Layout.Width * 0.03,
          marginVertical: Layout.Height * 0.01,
          justifyContent: 'space-between',
        })}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              marginRight: Layout.Width * 0.03,
              width: Layout.Width * 0.06,
              height: Layout.Width * 0.06,
              borderRadius: Layout.Width * 0.06,
              backgroundColor:
                who == '마미'
                  ? Colors.purple
                  : who == '김아빠'
                  ? Colors.skyblue
                  : who == '김공주'
                  ? Colors.pink
                  : Colors.green,
            }}
          />
          <Text
            style={{
              color: Colors.black,
              fontSize: Layout.FontScale * 18,
            }}>
            {todo}
          </Text>
        </View>
        <Pressable
          onPress={() => onDone(id)}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            borderRadius: 5,
            backgroundColor: done
              ? who == '마미'
                ? Colors.purple
                : who == '김아빠'
                ? Colors.skyblue
                : who == '김공주'
                ? Colors.pink
                : Colors.green
              : Colors.darkGray,
          })}>
          <CheckBox />
        </Pressable>
      </Pressable>
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
                key={item.key}
                onPress={() => {
                  setSelectedUser(item);
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
    </>
  );
}
