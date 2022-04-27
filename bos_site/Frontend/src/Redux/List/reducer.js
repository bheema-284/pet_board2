import { GET_LIST_LOADING, GET_LIST, GET_LIST_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  lists: [],
};

export const ListReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_LIST_LOADING:
      return { ...store, loading: true };
    case GET_LIST:
      return { ...store, loading: false, lists: [...payload] };
    case GET_LIST_ERROR:
      return { ...store, loading: false, lists: [], error: true };
    default:
      return store;
  }
};
