import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 30000,
});