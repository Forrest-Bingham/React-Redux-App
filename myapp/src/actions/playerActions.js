import axios from "axios";

export const FETCH_PLAYER_START = "FETCH_PLAYER_START";
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const FETCH_PLAYER_FAILURE = "FETCH_PLAYER_FAILURE";

export const getPlayer = () => dispatch => {
  dispatch({ type: FETCH_PLAYER_START });
  axios
    .get(`https://api.opendota.com/api/teams`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_PLAYER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PLAYER_FAILURE, payload: err.response });
    });
};
