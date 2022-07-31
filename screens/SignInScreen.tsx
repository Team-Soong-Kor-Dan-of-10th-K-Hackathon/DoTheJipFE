import * as React from 'react';
import {useRef, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import {RootStackScreenProps} from '../types';

import Logo from '../assets/images/logo.svg';
import Kakao from '../assets/icons/kakao.svg';
import Naver from '../assets/icons/naver.svg';

const userAccounts = [
  {
    email: '1234',
    password: '1234',
  },
];

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<'SignIn'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFieldFocused, setEmailFieldFocused] = useState(false);
  const [passwordFieldFocused, setPasswordFieldFocused] = useState(false);

  const passwordField = useRef<TextInput>(null);

  function requestAuth(email: string, password: string) {
    const index = userAccounts.findIndex(
      account => account.email.trim() === email.trim(),
    );
    if (index >= 0) {
      if (password === userAccounts[index].password) {
        Alert.alert('로그인 성공');
        navigation.navigate('ToDoList');
      } else {
        Alert.alert('비밀번호가 일치하지 않습니다.');
      }
    } else Alert.alert('회원 정보가 존재하지 않습니다.');
  }
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <Logo
        style={{
          marginVertical: Layout.Height * 0.06,
        }}
      />

      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="이메일을 입력하세요."
        placeholderTextColor={Colors.deepGray}
        style={{
          width: Layout.Width * 0.86,
          borderBottomWidth: 2,
          borderBottomColor: emailFieldFocused
            ? Colors.yellow
            : Colors.darkGray,
          color: Colors.black,
          fontSize: Layout.FontScale * 15,
        }}
        onFocus={() => setEmailFieldFocused(true)}
        onBlur={() => setEmailFieldFocused(false)}
        autoComplete={'email'}
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordField.current?.focus();
        }}
      />
      <TextInput
        ref={passwordField}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor={Colors.deepGray}
        style={{
          width: Layout.Width * 0.86,
          borderBottomWidth: 2,
          borderBottomColor: passwordFieldFocused
            ? Colors.yellow
            : Colors.darkGray,
          color: Colors.black,
          fontSize: Layout.FontScale * 15,
        }}
        secureTextEntry={true}
        onFocus={() => setPasswordFieldFocused(true)}
        onBlur={() => setPasswordFieldFocused(false)}
      />
      <Pressable
        onPress={() => requestAuth(email, password)}
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.86,
          height: Layout.Height * 0.05,
          backgroundColor: Colors.yellow,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          marginVertical: Layout.Height * 0.03,
        })}>
        <Text
          style={{
            color: Colors.black,
            fontSize: Layout.FontScale * 15,
            fontWeight: 'bold',
          }}>
          로그인
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: Layout.Width * 0.24,
            alignItems: 'center',
            justifyContent: 'center',
          })}>
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 12,
            }}>
            아이디찾기
          </Text>
        </Pressable>
        <View
          style={{
            borderLeftColor: Colors.deepGray,
            borderLeftWidth: 1.5,
            borderRightColor: Colors.deepGray,
            borderRightWidth: 1.5,
          }}>
          <Pressable
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
              width: Layout.Width * 0.24,
              alignItems: 'center',
              justifyContent: 'center',
            })}>
            <Text
              style={{
                color: Colors.deepGray,
                fontSize: Layout.FontScale * 12,
              }}>
              비밀번호찾기
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: Layout.Width * 0.24,
            alignItems: 'center',
            justifyContent: 'center',
          })}>
          <Text
            style={{
              color: Colors.deepGray,
              fontSize: Layout.FontScale * 12,
            }}>
            회원가입
          </Text>
        </Pressable>
      </View>

      <Text
        style={{
          marginTop: Layout.Height * 0.09,
          color: Colors.deepGray,
          fontSize: Layout.FontScale * 12,
        }}>
        SNS 계정으로 로그인
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: Layout.Width * 0.3,
          justifyContent: 'space-between',
          marginVertical: Layout.Height * 0.015,
        }}>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <Kakao />
        </Pressable>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <Naver />
        </Pressable>
      </View>
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
