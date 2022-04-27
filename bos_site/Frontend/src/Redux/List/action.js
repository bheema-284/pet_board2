export const GET_LIST = "GET_LIST";
export const GET_LIST_LOADING = "GET_LIST_LOADING";
export const GET_LIST_ERROR = "GET_LIST_ERROR";

export const getListLoading = () => {
  type: GET_LIST_LOADING;
};

export const getList = (payload) => {
  type: GET_LIST;
  payload;
};

export const getListError = () => {
  type: GET_LIST_ERROR;
};
