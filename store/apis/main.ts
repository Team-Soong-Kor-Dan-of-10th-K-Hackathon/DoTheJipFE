import axios from 'axios';
import { useRecoilState } from 'recoil';
import { API_URL } from './base.js';
import baseAPI from './base';
import { todosState } from '../atoms/todo';


// export function getFamilyTodo(familyid : any){
//     return baseAPI.get(`/families/${familyid}/todos`, {},  false, 'repeat', '')
// } 
