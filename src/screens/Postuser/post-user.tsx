import axios from 'axios'
import { useState } from 'react'
import './post-user.css'

const PostUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const handleButtonClick = async () => {
    if (name === '' || email === '') {
      alert('Please fill the info!')
      return
    }
    try {
      const response = await axios.post(url, { name: name, email: email })
      console.log(response.data)
      alert('We have uploaded correctly!')
      setName('')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="post-user">
      <h1>Post A New User</h1>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={handleButtonClick}>Send info</button>
      </div>
    </div>
  )
}

export default PostUser
