import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const TypeAPI = {
  getAllType: async () => (await API.get('/restaurant-type/')).data,
};
