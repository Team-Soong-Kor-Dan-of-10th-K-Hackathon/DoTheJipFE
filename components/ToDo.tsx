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
import {ITodoTypes} from '../recoil/todo';
import {SetterOrUpdater} from 'recoil';

interface PropTypes {
  id: number;
  todo: string;
  who: string;
  done: boolean;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

export default function ToDo({
  id,
  todo,
  who,
  done,
  onDone,
  onDelete,
  todos,
  setTodos,
}: PropTypes) {
  const [modalVisible, setModalVisible] = useState(false);
  const [titleFieldFocused, setTitleFieldFocused] = useState(false);
  const [titleEditable, setTitleEditable] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [openDate, setDateOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    key: '',
    label: '',
    value: 0,
    color: Colors.darkGray,
    icon: () => <ProfileIcon color={Colors.darkGray} />,
  });
  const [color, setColor] = useState(Colors.black);
  const [whos, setWho] = useState('담당자');
  
  React.useEffect(()=>{
    setColor(()=>{
      if(who == '김아빠'){
        return Colors.skyblue
      }
      else if(who == '막냉이'){
        return Colors.green
      }
      else if(who == '마미'){
        return Colors.purple
      }
      else if(who == '김공주'){
        return Colors.pink
      }
      return Colors.black
    })
  },[])

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        statusBarTranslucent={true}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
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
           <View
            style={{
              flexDirection: 'row',
              height: Layout.Height * 0.05,
              borderBottomWidth: 2,
              borderBottomColor: titleFieldFocused
                ? Colors.yellow
                : Colors.darkGray,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom:18,
            }}>
          <TextInput
            value={todo}
            placeholder={todo}
            placeholderTextColor={Colors.deepGray}
            editable={titleEditable}
            style={{
              width: Layout.Width * 0.75,
              color: Colors.black,
              fontSize: Layout.FontScale * 18
            }}
            onFocus={() => setTitleFieldFocused(true)}
            onBlur={() => setTitleFieldFocused(false)}
            returnKeyType="next"
          />
          </View>
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
        <Pressable
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
        style={({pressed}) => ({
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.5,
          height: Platform.OS=='ios' ? Layout.Height*0.07: Layout.Height * 0.06,
          backgroundColor: Colors.lightGray,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: Platform.OS=='ios' ? Layout.Height*0.01 : 0,
        })}>
        <Text
          style={{
            color: Colors.red,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold',
          }}>
          삭제
        </Text>
      </Pressable>
      <Pressable
        style={({pressed}) => ({
          position: 'absolute',
          bottom: 0,
          right: 0,
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.5,
          height: Platform.OS=='ios' ? Layout.Height*0.07: Layout.Height * 0.06,
          backgroundColor: Colors.yellow,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: Platform.OS=='ios' ? Layout.Height*0.01 : 0,
        })}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 18,
            fontWeight: 'bold',
          }}>
          편집
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
    </>
  );
}
