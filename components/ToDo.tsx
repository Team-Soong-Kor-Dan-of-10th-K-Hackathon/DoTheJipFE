import * as React from 'react';
import {useState} from 'react';
import {
  Pressable,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

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
          <TextInput
            value={todo}
            placeholder={todo}
            placeholderTextColor={Colors.deepGray}
            editable={titleEditable}
            style={{
              width: Layout.Width * 0.75,
              color: Colors.black,
              fontSize: Layout.FontScale * 18,
            }}
            onFocus={() => setTitleFieldFocused(true)}
            onBlur={() => setTitleFieldFocused(false)}
            returnKeyType="next"
          />
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
                who == '엄마'
                  ? Colors.purple
                  : who == '아빠'
                  ? Colors.skyblue
                  : who == '딸'
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
              ? who == '엄마'
                ? Colors.purple
                : who == '아빠'
                ? Colors.skyblue
                : who == '딸'
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
