import dataCsgoApi from '../apis/dataCsgoApi';

export const fetchPlayers = () => async dispatch => {
    const response = await dataCsgoApi.get('/api/players.json');
    dispatch({type: 'FETCH_PLAYERS', payload: response.data})
};

export const fetchTeams = () => async dispatch => {
    const response = await dataCsgoApi.get('/api/teams.json');
    dispatch({type: 'FETCH_TEAMS', payload: response.data})
};

export const fetchNews = () => async dispatch => {
    const response = await dataCsgoApi.get('/api/news.json');
    dispatch({type: 'FETCH_NEWS', payload: response.data})
};

export const fetchResults = () => async dispatch => {
    const response = await dataCsgoApi.get('/api/results.json');
    dispatch({type: 'FETCH_RESULTS', payload: response.data})
};