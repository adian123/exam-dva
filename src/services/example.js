import request from '../utils/request';
import  axios from 'axios';
export function query() {
  return request('/api/users');
}
export function getLogin(data){
  return axios.post('/api/user/login',data)
}