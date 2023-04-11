import { createSlice } from "@reduxjs/toolkit";
import { signinService } from "./signinService";


const initialState = {
    totalCount: 0,
    dataUser: [],
    loading: false,
    jwtToken: ''
};

export const signinSlice = createSlice({
    name: "Signin",
    initialState,
    reducers: {
        InitSignin: (state, action) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.dataUser = action.payload.data;
            state.jwtToken = action.payload.jwtToken;
            state.totalCount = action.payload.total_cnt;
            state.loading = false;
        },
        signinError: (state, action) => {                                                                                                                                                                                                                                                                
            console.log(action.payload);
            state.loading = false;
        },
        LogoutSuccess: (state, action) => {
            state.dataUser = [];
            localStorage.clear();
        },
    },
});

export const { InitSignin, signinSuccess, signinError, LogoutSuccess } = signinSlice.actions;

export const CreatedAccountSlice = createSlice({
    name: "CreatedAccount",
    initialState,
    reducers: {
        InitCreatedAccount: (state, action) => {
            state.loading = true;
        },
        CreatedAccountSuccess: (state, action) => {
            state.dataUser = action.payload.data;
            state.totalCount = action.payload.total_cnt;
            state.loading = false;
        },
        CreatedAccountError: (state, action) => {                                                                                                                                                                                                                                                                
            console.log(action.payload);
            state.loading = false;
        },
    },
});

export const { InitCreatedAccount, CreatedAccountSuccess, CreatedAccountError } = CreatedAccountSlice.actions;


export const fetchSignin = (employeeId, pass) => async (dispatch) => {
    try {
        dispatch(InitSignin());
        const response = await signinService.signIn(employeeId, pass);
        dispatch(signinSuccess(response));
    } catch (error) {
        dispatch(signinError(error));
    }
};

export const createdAccount = (userData) => async (dispatch) => {
    try {
        dispatch(InitCreatedAccount());
        const response = await signinService.CreatedAccountService(userData);
        console.log(response);
        dispatch(CreatedAccountSuccess(response));
    } catch (error) {
        dispatch(CreatedAccountError(error));
    }
};

export const LogoutRedux = () => async (dispatch) => {
    try {
        dispatch(LogoutSuccess());
    } catch (error) {
        
    }
}

export default signinSlice.reducer;
