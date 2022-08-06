import * as React from 'react';
import {useState, useEffect, useRef, Fragment} from 'react';
import {
  Pressable,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import CheckBox from '../assets/icons/check.svg';
import { ITodoTypes } from '../recoil/todo';
import { SetterOrUpdater } from 'recoil';

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

export default function ToDo({ id, todo, who, done, onDone, onDelete, todos, setTodos}: PropTypes) {
  //const [done, setDone] = useState(props.done);
  const [modalVisible, setModalVisible] = useState(false);
  // const panY = useRef(new Animated.Value(Layout.Height)).current;
  // const translateY = panY.interpolate({
  //   inputRange: [-1, 0, 1],
  //   outputRange: [0, 0, 1],
  // });
  // const resetBottomSheet = Animated.timing(panY, {
  //   toValue: 0,
  //   duration: 300,
  //   useNativeDriver: true,
  // });

  // const closeBottomSheet = Animated.timing(panY, {
  //   toValue: Layout.Height,
  //   duration: 300,
  //   useNativeDriver: true,
  // });

  // const panResponders = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => false,
  //     onPanResponderMove: (event, gestureState) => {
  //       if (gestureState.dy > 0 && gestureState.vy > 2) {
  //         closeBottomSheet.start(() => setModalVisible(false));
  //       } else resetBottomSheet.start();
  //     },
  //   }),
  // ).current;

  // useEffect(() => {
  //   if (modalVisible) resetBottomSheet.start();
  // }, [modalVisible]);

  return (
    <Fragment>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        statusBarTranslucent={true}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              width: Layout.Width,
              height: Layout.Height * 0.6,
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
           // transform: [{translateY: translateY}],
          }}
         /* {...panResponders.panHandlers}>*/
         >
          <Pressable
            style={{
              height: Layout.Height * 0.037,
              backgroundColor: Colors.white,
              alignItems: 'center',
              marginTop: 11,
            }}>
            <View
              style={{
                width: Layout.Width * 0.1,
                height: 3,
                backgroundColor: Colors.deepGray,
              }}></View>
          </Pressable>
          <View
            style={{
              height: Layout.Height * 0.05,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomColor: Colors.darkGray,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: Layout.FontScale * 18,
                color: Colors.black,
              }}>
              {todo}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
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
                  fontSize: Layout.FontScale * 18,
                  color: Colors.black,
                }}>
                {who}
              </Text>
            </View>
          </View>
          </View>
       {/*</Animated.View>*/}
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
    </Fragment>
  );
}
