export function setGames(url, opt) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'CHANGEISLOADING',
      payload: true
    })
    fetch(url, opt)
      .then(response => {
        // console.log(response);
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(response => {
        dispatch({
          type: 'FETCHGAMES',
          payload: response.results
        })
        dispatch({
          type: 'SETGAMESPAGEURL',
          payload: response.next
        })
        dispatch({
          type: 'CHANGEISLOADING',
          payload: false
        })
      })
      .catch(err => {
        dispatch({
          type: 'FETCHERROR',
          payload: err
        })
      })
  }
}

export function setMoreGames(url) {
  return (dispatch, getstate) => {
    const data = getstate()
    const games = data.gameReducer.games
    fetch(url)
      .then(response => {
        // console.log(url);
        // console.log(response);
        // console.log(games);
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(response => {
        dispatch({
          type: 'FETCHGAMES',
          payload: [...games, ...response.results]
        })
        dispatch({
          type: 'SETGAMESPAGEURL',
          payload: response.next
        })
      })
      .catch(err => {
        dispatch({
          type: 'FETCHERROR',
          payload: err
        })
      })
  }
}

export function setGame(url, opt) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'CHANGEISLOADING',
      payload: true
    })
    fetch(url, opt)
      .then(response => {
        // console.log(response);
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(response => {
        dispatch({
          type: 'FETCHGAME',
          payload: response
        })
        dispatch({
          type: 'CHANGEISLOADING',
          payload: false
        })
      })
      .catch(err => {
        dispatch({
          type: 'FETCHERROR',
          payload: err
        })
      })
  }
}

export function changeSidebar(payload) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'CHANGEISSIDEBAR',
      payload
    })
  }
}

export function changeSelectedIndex(payload) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'CHANGESELECTEDINDEX',
      payload
    })
  }
}

export function changeIsLoading(payload) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'CHANGEISLOADING',
      payload
    })
  }
}

export function fetchError(payload) {
  return (dispatch, getstate) => {
    dispatch({
      type: 'FETCHERROR',
      payload
    })
  }
}