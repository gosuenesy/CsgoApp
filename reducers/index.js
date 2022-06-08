import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import teamsReducer from './teamsReducer';
import newsReducer from './newsReducer';
import resultsReducer from './resultsReducer';

export default combineReducers ({
    players: playersReducer,
    teams: teamsReducer,
    news: newsReducer,
    results: resultsReducer
});