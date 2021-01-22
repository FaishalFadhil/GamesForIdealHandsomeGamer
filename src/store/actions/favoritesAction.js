export function setFavourites(payload) {
  return (dispatch, getstate) => {
    dispatch ({
      type: 'FETCHFAVOURITES',
      payload
    })
  }
}