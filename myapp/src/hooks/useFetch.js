import { useState, useEffect } from "react";
import axios from "axios";
// import { getToken, getEmlID } from "../services/signin/getToken";

//const sectionID = getEmlID();
//const token = getToken();
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    // 'Authorization': `Bearer ${token}`,
    'Content-Type': "application/json; charset=utf-8",
    // 'Access-Control-Allow-Origin': '*',
    // 'userID': `${sectionID}`
  }
});

export const useFetch = (setData, setTotalCount, params) => {
  const [condSearch, setCondSearch] = useState(params);
  const callGetApi = () => {
    instance
      .get(condSearch.screenId, { params: condSearch })
      .then((response) => {
        setData(response.data.data);
        setTotalCount(response.data.total);
      })
      .catch((error) => { });
  };
  useEffect(() => {
    if (undefined !== condSearch) {
      callGetApi();
    }
  }, [condSearch]);

  return [condSearch, setCondSearch];
};

export const useSelectOptionFetch = (setSelectOption, params) => {
  const [condSearch, setCondSearch] = useState(params);
  const callGetApi = () => {
    instance
      .get(condSearch.service, { params: condSearch })
      .then((response) => {
        setSelectOption(response.data.search_result);
      })
      .catch((error) => { });
  };
  useEffect(() => {
    if (undefined !== condSearch) {
      callGetApi();
    }
  }, [condSearch]);

  return [condSearch, setCondSearch];
};

export const useInsert = (
  setData,
  setTotalCount,
  page,
  pageSize,
  setPage,
  setPageSize,
  setOpen,
  params
) => {
  const [dataInsert, setDataInsert] = useState(params);
  const callGetApi = () => {
    instance
      .post(
        dataInsert.screenId,
        { ...dataInsert },
        {
          params: {
            page: 1,
            size: pageSize,
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
        setTotalCount(response.data.total);
        setPage(0);
        setPageSize(pageSize);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (undefined !== dataInsert && undefined !== dataInsert.screenId) {
      callGetApi();
    }
  }, [dataInsert]);

  return [dataInsert, setDataInsert];
};

export const useUpdate = (
  setData,
  setTotalCount,
  page,
  pageSize,
  setPage,
  setPageSize,
  setOpen,
  params
) => {
  const [dataUpdate, setDataUpdate] = useState(params);
  const callGetApi = () => {
    instance
      .put(
        dataUpdate.screenId,
        {
          ...dataUpdate,
        },
        {
          params: {
            page: page+1,
            size: pageSize,
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
        setTotalCount(response.data.total);
        setPage(page);
        setPageSize(pageSize);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (undefined !== dataUpdate && undefined !== dataUpdate.screenId) {
      callGetApi();
    }
  }, [dataUpdate]);

  return [dataUpdate, setDataUpdate];
};
