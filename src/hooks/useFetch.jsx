import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setGames, setGame } from '../store/actions/gamesAction'

export default function useFetch(url, opt) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    setLoading(true)
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
        // console.log("here", response);
        response.results ? setData(response.results) : setData(response)
        if (response.count !== 19) {
          response.results ? dispatch(setGames(response.results)) : dispatch(setGame(response))
        }
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  // console.log(error);

  return {data, error, isLoading}
}