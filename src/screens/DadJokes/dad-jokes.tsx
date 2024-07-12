import useJokes from '../../hooks/useJokes'
import './dad-jokes.css'

const DadJokes = () => {
  const { getJoke, joke } = useJokes()
  return (
    <div className="dad-jokes">
      <h1>Get your dad joke ASAP</h1>
      <button onClick={getJoke}>Get it!</button>
      {joke && <p>{joke}</p>}
    </div>
  )
}

export default DadJokes
