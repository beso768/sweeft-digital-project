import { fetchData } from '../../utils/httpService';
import { userListTypes } from '../actionTypes/userListTypes';

const getData = async (dispatch, page, userId) => {
  dispatch({
    type: userListTypes.LOADING_DATA,
  });
  try {
    const response = await fetchData(page, userId);
    dispatch({ type: userListTypes.SUCCESSFULL_DATA, payload: response.list });
  } catch (e) {
    dispatch({ type: userListTypes.ERROR_DATA, payload: e.message });
  }
};
const clearData = dispatch => {
  dispatch({
    type: userListTypes.CLEAR_DATA,
  });
};

export { getData, clearData };
