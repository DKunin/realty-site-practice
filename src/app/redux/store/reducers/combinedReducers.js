import { combineReducers } from 'redux';
import AppReducer from './appReducer';

const CombinedReducers = combineReducers({ app: AppReducer });

export default CombinedReducers;
