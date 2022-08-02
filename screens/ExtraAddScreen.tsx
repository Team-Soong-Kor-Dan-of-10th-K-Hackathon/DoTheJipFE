import 'moment/locale/ko';
import {
    FlatList,
    Image,
    Modal,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import * as React from 'react';
import {useState,ReactElement} from 'react';

import AddIcon from '../assets/icons/add.svg';
import DressIcon from "../assets/icons/DressIcon.svg"
import Repeat from "../assets/icons/repeat.svg"
import Option from "../assets/icons/option.svg"
import Memo from "../assets/icons/memo.svg"
import Coupon from "../assets/icons/coupon.svg"
import Alarm from "../assets/icons/alarm.svg"
import Circle from "../assets/icons/circle.svg"
import Calendar from "../assets/icons/calendar.svg"
import { useRef } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
const TodoSelect =[
    {
        todo: '빨래 널기'
    },
    {
        todo: '빨래 개기'
    },
    {
        todo: '세탁기 돌리기'
    },
    {
        todo: '다림질 하기'
    },
    {
        todo: '바느질 하기'
    },
    {
        todo: '수선집 다녀오기'
    }
]

const userSelect =[
  {
      name: '아빠'
  },
  {
      name: '엄마'
  },
  {
      name: '큰누나'
  },
  {
      name: '작은누나'
  },
  {
      name: '나'
  },
  {
      name: '여동생'
  }
]

const extraSelect =[
  {
      option: '알림 설정'
  },
  {
      option: '반복 설정'
  },
  {
      option: '쿠폰 여부'
  },
  {
      option: '메모'
  }
]



export default function AddScreen() {
  const [date, setDate] = useState(new Date());
  const [openDate,setDateOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [TodoVisible,setTodoVisible] = useState(false);
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
        icon: () => <Alarm style={{width:24,height:24}}/>
    },
    {
      label: '반복 설정',
      value: 1,
      icon: () => <Repeat style={{width:24,height:24}}/>
    },
    {
        label: '쿠폰 여부',
        value: 2,
        icon: () => <Coupon style={{width:24,height:24}}/>
    },
    {
        label: '메모',
        value: 3,
        icon: () => <Memo style={{width:24,height:24}}/>
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
      icon: () => <Circle style={{width:24,height:24}}/>
  },
  {
    label: '엄마',
    value: 1,
    icon: () => <Circle style={{width:24,height:24}}/>
}
]);
    const onTodoOpen = React.useCallback(()=>{
        setOpen(false)
        setUserOpen(false)
    },[]);
    const onUserOpen = React.useCallback(()=>{
        setTodoOpen(false)
        setOpen(false)
    },[])
    const onExtraOpen= React.useCallback(()=>{
        setTodoOpen(false)
        setUserOpen(false)
    },[])
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30,marginVertical:39}}>상세설정</Text>
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
             style={{backgroundColor:'white',borderColor:'white',borderBottomColor:'#EBEBEB',marginBottom:18}}
             placeholder={'할 일 직접 입력'}
             textStyle={{fontSize:18}}
             zIndex={3000}
             zIndexInverse={1000}
             dropDownContainerStyle={{
              backgroundColor: 'white'
            }}
         />
        <TouchableOpacity 
            onPress={()=>{
                setDateOpen(true);
            }}>
                <View
                 style={{width:330,height:48,backgroundColor:'#EBEBEB',marginBottom:18,borderRadius:5,justifyContent:'flex-start',padding:10,flexDirection:'row'}}
                 >
                    <Calendar style={{width:24, height:24,marginRight:15}}/>
                    <Text style={{fontSize:18}}>{moment(date).format('YYYY-MM-DD')}</Text>
                 </View>
        </TouchableOpacity>
        <DatePicker
            modal 
            date={date} 
            mode={'date'}
            open={openDate}
            onConfirm={(date)=>{
                setDate(date)
                setDateOpen(false)
            }}
            onCancel={()=>{
                setDateOpen(false)
            }}/>
             <DropDownPicker
             open={openUser}
             value={valueUser}
             items={user}
             onOpen={onUserOpen}
             setOpen={setUserOpen}
             setValue={setUserValue}
             setItems={setUser}
             style={{backgroundColor:'#EBEBEB',borderColor:'white',marginBottom:18}}
             placeholder={'담당자'}
             textStyle={{fontSize:18}}
             zIndex={2000}
             zIndexInverse={2000}
             dropDownContainerStyle={{
              backgroundColor: '#EBEBEB'
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
             style={{backgroundColor:'#EBEBEB',borderColor:'white'}}
             placeholder={'추가 설정'}
             textStyle={{fontSize:18}}
             zIndex={1000}
             zIndexInverse={3000}
             dropDownContainerStyle={{
              backgroundColor: '#EBEBEB'
            }}
      />
      {/* <SelectDropdown
        data={TodoSelect.map(target => {return target.todo})}
        onSelect={(selectedItem,index)=>{
          console.log(selectedItem,index)
        }}
        buttonTextAfterSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        rowTextForSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        defaultButtonText={'할 일 직접입력'}/>
        <SelectDropdown
        data={userSelect.map(target => {return target.name})}
        onSelect={(selectedItem,index)=>{
          console.log(selectedItem,index)
        }}
        buttonTextAfterSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        rowTextForSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        defaultButtonText={'담당자'}
        buttonStyle={{width:330,height:42,borderRadius:5}}
        renderDropdownIcon={(selectedItem,index)=>{
          return selectedItem
        }}
        dropdownStyle={{backgroundColor:'#8B8B8B'}}
        statusBarTranslucent={false}
        />
        <SelectDropdown
        data={extraSelect.map(target => {return target.option})}
        onSelect={(selectedItem,index)=>{
          console.log(selectedItem,index)
        }}
        buttonTextAfterSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        rowTextForSelection={(selectedItem,index)=>{
          return selectedItem
        }}
        defaultButtonText={'추가 설정'}/> */}
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
