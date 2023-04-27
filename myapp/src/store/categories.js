// import { createSlice } from '@reduxjs/toolkit'
// // import { CommonService } from "../../services/CommonService";
// import Api from '../component/Api';
// const initialState = { 
//     totalCount: 0,
//     data: [],
//     loading: false,
// };
// export const CategorySlice = createSlice({
//   name: 'Categories',
//   initialState,
//   reducers: {
//     loadingData(state,action) {
//         state.loading = true;
//     },
//     Returndata(state, action) {
//         state.data =  action.payload.data;
//         state.totalCount = 0;// action.payload.total_cnt;
//         state.loading = true;
//     },
//     Errordata(state, action) {
//         console.log(action.payload)
//         state.loading = false;
//     },
//   },
// })

// export const { loadingData, Returndata, Errordata } = CategorySlice.actions

// export const getApiCategory = (param) => async (dispatch )=>{

//     const data =[{"a":"b"}]
//     try {
//         dispatch(loadingData());
//         // const response = await CommonService.getData("M990100030", param);
//         // dispatch(Returndata(response));

//         Api.get("p",{
//             param
//         }).then((res)=>{
//             console.log('data redux',res);
//             data = res;

//         })
//         dispatch(Returndata(data));
//         console.log("++");
//     } catch (error) {
//         dispatch(Errordata())

//     }
    
//     //console.log("check"+response);
// }


// export default CategorySlice.reducer;