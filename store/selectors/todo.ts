import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import { todosState } from '../atoms/todo';
// import { getFamilyTodo } from '../main';

// export const getToDosSelector = selector({
//     key: `todos/get`,
//     get: async ({ get }) => {
//         const { data } = await getFamilyTodo();
//         return data;
//     },
//     set: ({ set }, newValue) => {
//         set(todosState, newValue);
//     }
// });