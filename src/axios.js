import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-fir-f9554.cloudfunctions.net/api'
    // baseURL: 'http://127.0.0.1:5001/fir-f9554/us-central1/api' 
});

export default instance;