import { combineReducers } from 'redux';
import UserReducer from './user';
import PlayerReducer from './player';
export default combineReducers({
    User:UserReducer,
    Player:PlayerReducer
})