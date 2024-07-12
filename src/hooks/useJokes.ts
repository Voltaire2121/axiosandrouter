import axios from 'axios'
import { useState } from 'react'

const useJokes = () => {
  const [joke, setJoke] = useState('')
  const getJoke = async () => {
    const { data } = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
    setJoke(data.joke)
  }
  return { getJoke, joke }
}

export default useJokes
