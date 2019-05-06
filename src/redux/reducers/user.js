import { HANDLE_FAVORITE } from "../actions/actionTypes";
import _ from 'lodash';

const InitialState = {
  user: {},
  playlist: [],
  showSidebar: false,
};
const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case HANDLE_FAVORITE:
      return {
        ...state, playlist: _.map(state.playlist, (fav) => {


        })
      };


    case 'SHOW_SIDE_BAR': {
      return {
        ...state,
        showSidebar: true
      }
    }
    default:
      return state;
  }
};
export default UserReducer;
