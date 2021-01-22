const initialState = {
  favourites: []
}

function favouriteReducer (state = initialState, action){

  switch (action.type) {
    case "FETCHFAVOURITES":
      return {...state, favourites: action.payload}
    default:
      break;
  }
  return state
}

export default favouriteReducer