import axiosClient from "./axiosClient.js"

const userApi = {
    login: (params) => {
        const url = `/api/administration/administrators/login.json`;
        return axiosClient.post(url, { 
            params,
        });
    },

}

export default userApi;