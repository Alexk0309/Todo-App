import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://192.168.0.102:8080/api/v1',
  timeout: 30000,
});
