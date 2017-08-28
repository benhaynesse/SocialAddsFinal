import { combineReducers } from "redux";

//File is used to combine all the reducers.
import profiles from './profiles';
import navbar from './navbar';


export default combineReducers({
   profiles,navbar
})