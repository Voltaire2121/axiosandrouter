import { Link } from 'react-router-dom'
import './nav-bar.css'

const pages = [
  { id: 1, name: 'Dad Jokes', link: 'DadJokes' },
  { id: 2, name: 'Client List', link: 'ClientList' },
  { id: 3, name: 'Post User', link: 'PostUser' },
]

const NavBar = () => {
  return (
    <div className="nav-bar">
      {pages.map((page) => (
        <Link key={page.id} to={page.link}>
          {page.name}
        </Link>
      ))}
    </div>
  )
}

export default NavBar
