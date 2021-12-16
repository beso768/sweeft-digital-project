import { fetchData } from '../../utils/httpService';
import { userListTypes } from '../actionTypes/userListTypes';

const setError = (dispatch, error) => {
  dispatch({ type: userListTypes.ERROR_DATA, payload: error.message });
};

const getData = async (dispatch, page, userId) => {
  dispatch({
    type: userListTypes.LOADING_DATA,
  });
  try {
    const response = await fetchData(page, userId);
    dispatch({ type: userListTypes.SUCCESSFULL_DATA, payload: response.list });
  } catch (error) {
    setError(dispatch, error);
  }
};

const clearData = dispatch => {
  dispatch({
    type: userListTypes.CLEAR_DATA,
  });
};

export { getData, clearData, setError };
