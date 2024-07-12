import axios from 'axios'
import { useEffect, useState } from 'react'

type Client = {
  name: string
  username: string
  id: number
}

const useClients = () => {
  const [clients, setClients] = useState<Client[]>([])

  const fetchClients = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setClients(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchClients()
  }, [])
  return { clients }
}

export default useClients
