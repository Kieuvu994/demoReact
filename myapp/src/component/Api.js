/*===============================================
 *Copyright(c) 2022 POSCO/POSCOICT Vietnam
 *
 *@ProcessChain  : M99
 *@File          : Api.js
 *@FileName      : Common Api
 *
 * Change history
 * @LastModifier  : HuyVu
 * @Date         Version NO  Modifier   Description
 * 2023-1-30     V1.0        HuyVu       Initial
===============================================*/
import axios from 'axios'
import SnackbarUtils from "./SnackbarUtils";
import { getToken, getEmlID } from './signin/getToken';
const token = getToken();
const sectionID = getEmlID();
const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
        'userID': `${sectionID}`
    }
});
// console.log("tokeeeeeen: " + token);
// console.log("sectionID: " + sectionID);
instance.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    if (response.data.status > 400 && response.data.status < 600) {
        SnackbarUtils.error(response.data.status + ':' + response.data.message)
        return Promise.reject(response.data);
    }
    return response;
}, err => {
    // console.log(err)
    SnackbarUtils.error(err.message)
    return Promise.reject(err);
})

export default instance