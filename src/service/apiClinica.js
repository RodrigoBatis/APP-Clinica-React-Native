//Importando o pacote do Axios 
import axios from 'axios';

const apiClinica = axios.create({
   baseURL:'http://192.168.2.108:3000'
});

export default apiClinica;