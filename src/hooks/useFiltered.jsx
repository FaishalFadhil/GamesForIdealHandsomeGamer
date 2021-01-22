import { useState, useEffect } from 'react';

export default function useFiltered(value, params) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const filtered = value.filter( e => (e.genres.filter(g => g.name === params)).length !== 0 )
    setData(filtered)
    setLoading(false)
  }, [params, value])

  // console.log(error);

  return {data, isLoading}
}