import axios from 'axios';

//Change port for backend support
export const api = axios.create({ baseURL: 'https://localhost:44338/' });

const fakeCallback = (resolve, reject) => {
  resolve({ data: { fake: true } })
}

export const fakeApi = {
  post: () => new Promise(fakeCallback),
  get: () => new Promise(fakeCallback),
  put: () => new Promise(fakeCallback),
  delete: () => new Promise(fakeCallback),
}