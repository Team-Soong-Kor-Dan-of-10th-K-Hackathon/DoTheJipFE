import { Color, SvgProps } from "react-native-svg";
import { atom } from "recoil";
import Colors from "../../constants/Colors";

export interface ITodoitemTypes{
    id: number;
    category: string;
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
            title: '의류',
            data: [
              {
                id:1,
                todo: '세탁기 돌리기',
                who: '김아빠',
                category: '의류',
                done: false,
              },
              {
                id:2,
                todo: '빨래 널기',
                who: '마미',
                category: '의류',
                done: true,
              },
            ],
          },
          {
            title: '청소',
            data: [
              {
                id:3,
                todo: '거실 청소',
                who: '김공주',
                category: '청소',
                done: true,
              },
            ],
          },
          {
            title: '쓰레기 배출',
            data: [
              {
                id:4,
                todo: '재활용 쓰레기 분리수거',
                who: '막냉이',
                category: '쓰레기 배출',
                done: false,
              },
              {
                id:5,
                todo: '음식물 쓰레기 버리기',
                who: '마미',
                category: '쓰레기 배출',
                done: true,
              },
            ],
          },
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
    },
    {
      id: 1,
      title: '청소',
      color: Colors.pink,
      detail: '방 청소, 거실 청소, 욕실 청소, 대청소',
    },
    {
      id: 2,
      title: '쓰레기 배출',
      color: Colors.skyblue,
      detail: '일반 쓰레기, 음식물 쓰레기, 재활용 쓰레기',
    },
    {
      id: 3,
      title: '식사',
      color: Colors.purple,
      detail: '장보기, 요리하기, 설거지, 식탁 닦기',
    },
    {
      id: 4,
      title: '반려동물/식물',
      color: Colors.green,
      detail: '물 주기, 밥 주기, 간식 주기, 산책하기',
    },
    {
      id: 5,
      title: '육아',
      color: Colors.beige,
      detail: '학교 등/하교, 학원 등/하원, 놀이터',
    },
    {
      id: 6,
      title: '기타',
      color: Colors.navy,
      detail: '가계부 정리, 은행 방문, 관공서 방문',
    },
  ]
});
  