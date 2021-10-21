const axios = require('axios').default;

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: __DEV__ ? 'https://groshapp.com/edge/' : "https://groshapp.com/edge/",
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

// Invoked after before every request
instance.interceptors.request.use(async function (config) {

   config.headers.Authorization = "Basic am9obkBncm9zaGFwcC5jb206SmQxMjM0";

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



// Invoked after every response
instance.interceptors.response.use(function (response) {

    return response;
}, async function (error) {

    const originalRequest = error.response.data;

    if (error.response.status === 403 && !originalRequest.validToken) {

        originalRequest.validToken = true;

        //https://stackoverflow.com/questions/51439338/abort-all-axios-requests-when-change-route-use-vue-router
        //if we are to abort all of them, check link. We need to go to each service and put the token there
        //instance.CancelToken.source().cancel('Abort all operations, we\'re logging out');
    }
    return Promise.reject(error.response);
});

export const http = instance;
