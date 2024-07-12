import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ClientList from './screens/ClientList/client-list'
import DadJokes from './screens/DadJokes/dad-jokes'
import NavBar from './components/NavBar/nav-bar'
import PostUser from './screens/Postuser/post-user'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/clientlist" element={<ClientList />} />
          <Route path="/dadjokes" element={<DadJokes />} />
          <Route path="/postuser" element={<PostUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
