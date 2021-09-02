export const GET_AIRLINE = 'GET_AIRLINE';
export const SET_AIRLINE = 'SET_AIRLINE';

export const getAirline = () => ({
  type: GET_AIRLINE,
});

export const setAirline = (airline) => ({
  type: SET_AIRLINE,
  airline,
});

const initialState = {
  airline: {},
};

export const airlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRLINE:
      return {
        ...state,
      };
    case SET_AIRLINE:
      return {
        ...state,
        airline: action.airline,
      };
    default:
      return state;
  }
};
