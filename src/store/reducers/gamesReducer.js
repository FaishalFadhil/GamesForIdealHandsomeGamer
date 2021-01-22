const initialState = {
  games: [],
  game: null,
  isSidebarOpen: false,
  selectedIndex: null,
  isLoading: false,
  error: null,
  gamesPageUrl: null
}

function gameReducer (state = initialState, action){

  switch (action.type) {
    case "FETCHGAMES":
      return {...state, games: action.payload}
    case "FETCHGAME":
      return {...state, game: action.payload}
    case "SETGAMESPAGEURL":
      return {...state, gamesPageUrl: action.payload}
    case "CHANGEISSIDEBAR":
      return {...state, isSidebarOpen: action.payload}
    case "CHANGESELECTEDINDEX":
      return {...state, selectedIndex: action.payload}
    case "CHANGEISLOADING":
      return {...state, isLoading: action.payload}
    case "FETCHERROR":
      return {...state, error: action.payload}
    default:
      break;
  }
  return state
}

export default gameReducer