import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params), // ko co cai nay se default
});

axiosClient.interceptors.request.use(async (config) => {
    // handle token here
    //const currentUser = firebase.auth().currentUser;

    //if (currentUser) {
        // const token = await currentUser.getIdToken();
        // config.headers.Authorization = `Bearer ${token}`;
    //}

    return config;

})

axiosClient.interceptors.response.use((response) => {

    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {     
    // handle errors
    throw error;
});

export default axiosClient;