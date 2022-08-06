import { Color, SvgProps } from "react-native-svg";
import { atom } from "recoil";
import Colors from "../constants/Colors";
import Animal from '../assets/icons/animal.svg';
import Baby from '../assets/icons/baby.svg';
import Bank from '../assets/icons/bank.svg';
import Clean from '../assets/icons/clean.svg';
import Clothes from '../assets/icons/clothes.svg';
import Meal from '../assets/icons/meal.svg';
import Trash from '../assets/icons/trash.svg';

export interface ITodoitemTypes{
    id: number;
    todo: string;
    who: string;
    done: boolean;
}

export interface ITodoTypes {
    title : string;
    data : ITodoitemTypes[];
  }


  export interface ICategoryTypes{
    id: number,
    title: string,
    color: Color,
    detail: string,
    icon: any,
  }
  // TodoInput에서 입력하는 값을 atom으로 관리하는 방식
  export const inputState = atom<string>({
    key: 'inputState',
    // key의 값은 항상 고유값이어야 합니다.
    default: '',
  });

// 업데이트 시킬 Todos atom 배열
export const todosState = atom<ITodoTypes[]>({
    key: 'todos',    
    // default에는 임의의 데이터를 넣어줍시다.
    default: [
      {
        title : '의류',
        data:[
        {
        id: 1,
        todo: 'Todo List를',
        who: '아빠',
        done: false
        },]
      },
  
      {  
        title : '쓰레기 배출',
        data:[
        {
        id: 2,
        todo: '자유롭게',
        who: '아들',
        done: false,
        }]
      },
  
      {
        title: '청소',
        data:[
        {
        id: 3,
        todo: '추가해보세요!',
        who: '아빠',
        done: false,
        }]
      }
    ],
  });
  

  
  export const categoryList = atom<ICategoryTypes[]>({
    key : 'categories',
    default:[
    {
      id: 0,
      title: '의류',
      color: Colors.yellow,
      detail: '빨래 널기, 빨래 개기, 다림질, 바느질',
      icon: Clothes,
    },
    {
      id: 1,
      title: '청소',
      color: Colors.pink,
      detail: '방 청소, 거실 청소, 욕실 청소, 대청소',
      icon: Clean,
    },
    {
      id: 2,
      title: '쓰레기 배출',
      color: Colors.skyblue,
      detail: '일반 쓰레기, 음식물 쓰레기, 재활용 쓰레기',
      icon: Trash,
    },
    {
      id: 3,
      title: '식사',
      color: Colors.purple,
      detail: '장보기, 요리하기, 설거지, 식탁 닦기',
      icon: Meal,
    },
    {
      id: 4,
      title: '반려동물/식물',
      color: Colors.green,
      detail: '물 주기, 밥 주기, 간식 주기, 산책하기',
      icon: Animal,
    },
    {
      id: 5,
      title: '육아',
      color: Colors.beige,
      detail: '학교 등/하교, 학원 등/하원, 놀이터',
      icon: Baby,
    },
    {
      id: 6,
      title: '기타',
      color: Colors.navy,
      detail: '가계부 정리, 은행 방문, 관공서 방문',
      icon: Bank,
    },
  ]
});
  