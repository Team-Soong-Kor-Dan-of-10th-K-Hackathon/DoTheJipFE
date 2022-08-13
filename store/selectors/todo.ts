import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import { todosState } from '../atoms/todo';
import { familyIdState } from '../atoms/user';
import { getFamilyTodo } from '../apis/main';

export const getToDosSelector = selector({
    key: `todos/get`,
    get: async ({ get }) => {
        const familyId = get(familyIdState);
        const { data } = await getFamilyTodo(familyIdState);
        return data;
    },
    set: ({ set }, newValue) => {
        set(todosState, newValue);
    }
});