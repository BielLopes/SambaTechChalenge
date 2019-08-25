import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://www.breakingbadapi.com/api/`,
})
//Para instalar use o comando:
//npm install --save axios vue-axios