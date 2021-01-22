import { createStore, applyMiddleware, combineReducers } from "redux";
import  thunk  from "redux-thunk";
import favouriteReducer from './reducers/favouritesReducer'
import gameReducer from './reducers/gamesReducer'

const rootReducer = combineReducers({
  favouriteReducer,
  gameReducer
})


//add combine
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store