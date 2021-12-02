import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from './types';

// get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'https://ranjan-it-logger-backend.herokuapp.com/logs'
    );
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// add new log to server
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'https://ranjan-it-logger-backend.herokuapp.com/logs',
      {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`https://ranjan-it-logger-backend.herokuapp.com/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://ranjan-it-logger-backend.herokuapp.com/logs/${log.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// search logs from server
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://ranjan-it-logger-backend.herokuapp.com/logs?q=${text}`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
