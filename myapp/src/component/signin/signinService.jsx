import axios from 'axios';
import { useSelector } from 'react-redux';
import { getEmlID, getToken } from './getToken';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export const signinService = {
    getData: async (url) => {
        try {
            const config = {
                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            };
            const res = await instance.get(url, config);

            if (res.data.ERROR === undefined) {
                return res.data;
            }
            alert('Error From Server: ' + url);
        } catch (error) {
            throw error;
        }
    },
    signIn: async (employeeId, pass) => {
        try {
            const config = {

                headers: {
                    // 'Vary': 'Origin',
                    // 'Vary': 'Access-Control-Request-Method',
                    // 'Vary': 'Access-Control-Request-Headers',                  
                    // 'Accept': "application/json",
                    // 'Access-Control-Allow-Origin': '*',
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            };
            const res = await instance.get(`${process.env.REACT_APP_EMPLOYEE_API_BASE_URL}?loginEmpId=${employeeId}&loginPassword=${pass}`, config);
            console.log(res);
            if (res.data.data.ERROR === undefined) {
                localStorage.setItem('userAuthData', JSON.stringify(res.data.data));
                localStorage.setItem('Token', res.data.jwtToken);
                return res.data;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    CreatedAccountService: async (userData) => {
        // grab the user Token from localstorage
        const Token = getToken();
        const sectionID = getEmlID();
        try {
            const config = {

                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${Token}`,
                    'userID': `${sectionID}`
                }
            };
            const res = await axios.post(`${process.env.REACT_APP_EMPLOYEE_API_BASE_URL_JWT}`, userData, config);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;

        }
    }
};
