import { combineReducers } from 'redux';
import favReducer from './favReducer'
import reducer from './movieReducer';
// import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    movies: reducer,
    favorites: favReducer
})



export default rootReducer;