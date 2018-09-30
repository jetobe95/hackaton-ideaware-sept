import { HANDLE_FAVORITE } from "../actions/actionTypes";
import _ from 'lodash';

const InitialState = {
  user: {},
  playlist: []
};
const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case HANDLE_FAVORITE:
      return {...state,playlist:_.map(state.playlist,(fav)=>{
        

      })};
    default:
      return state;
  }
};
export default UserReducer;
