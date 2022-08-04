import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignIn: undefined;
  ToDoList: undefined;
  SelectCategory: undefined;
  AddCategory: undefined;
  AddToDo: {category: string};
  StatisticalData: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
