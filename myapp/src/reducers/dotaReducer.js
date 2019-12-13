import {
  FETCH_PLAYER_START,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE
} from "../actions";

const initialState = {
  teams: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_PLAYER_FAILURE:
      return {
        ...state,
        teams: [],
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
