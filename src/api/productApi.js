import axiosClient from "./axiosClient.js"

const productApi = {
    getAll: (params) => {
        const url = `/products`;
        return axiosClient.get(url, { 
            params,
            // baseURL: 'https://learn-tech-tips.blogspot.com',
            // headers: {
            //     'testing': '111',
            // }
        });
    },

    get: (id) => {
        const url = `products/${id}`;
        return axiosClient.get(url);
    },

}

export default productApi;