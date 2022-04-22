import axiosClient from "./axiosClient.js"

const userApi = {
    login: (params) => {

        console.log('params: ', params);
        const url = `/api/administration/administrators/login.json`;

        return axiosClient.post(url, { 
            language: params.language,
            username: params.username,
            password: params.password,
        });
    },

}

export default userApi;