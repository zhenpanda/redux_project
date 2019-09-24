import {combineReducers} from 'redux';
import DataReducer from './data';

export default combineReducers({
    data: DataReducer
})