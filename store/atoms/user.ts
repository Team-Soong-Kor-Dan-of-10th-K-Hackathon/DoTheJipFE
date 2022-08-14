import { atom } from "recoil";


export const userIdState = atom<number>({
    key: 'userIdState',
    default: 0,
  });
  
export const familyIdState = atom<number>({
    key: 'familyIdState',
    default: 8,
  });