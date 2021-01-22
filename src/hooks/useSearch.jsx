import { useState, useEffect } from 'react';

export default function useSearch(value, query) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const filtered = value.filter( e => (e.name.toLowerCase().includes(query.toLowerCase())))
    setData(filtered)
    setLoading(false)
  }, [query, value])

  // console.log(error);

  return {data, isLoading}
}