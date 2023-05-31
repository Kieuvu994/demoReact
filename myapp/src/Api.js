
import axios from 'axios'
// import SnackbarUtils from "./SnackbarUtils";
//import { getToken, getEmlID } from './signin/getToken';
//const token = getToken();
//const sectionID = getEmlID();
const instance = axios.create({
    baseURL: "http://localhost:8080/vu-cnpm/api/",
    headers: {
        //'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json; charset=utf-8",
        //'Access-Control-Allow-Origin': '*',
  //      'userID': `${sectionID}`
    }
});
// console.log("tokeeeeeen: " + token);
// console.log("sectionID: " + sectionID);
instance.interceptors.request.use((request) => {
    console.log("request",request)
    return request;

}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    if (response.data.status > 400 && response.data.status < 600) {
        // SnackbarUtils.error(response.data.status + ':' + response.data.message)
        return Promise.reject(response.data);
    }
    return response;
}, err => {
     console.log('err',err)
    // SnackbarUtils.error('err.message')
    // return Promise.reject('err');
})

export default instance