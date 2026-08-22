import { useEffect, useState } from 'react'

function useSalesData() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
  }, [])

  return data
}

export default useSalesData