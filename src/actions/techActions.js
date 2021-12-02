import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

// get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'https://ranjan-it-logger-backend.herokuapp.com/techs'
    );
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// add tech
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'https://ranjan-it-logger-backend.herokuapp.com/techs',
      {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`https://ranjan-it-logger-backend.herokuapp.com/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
