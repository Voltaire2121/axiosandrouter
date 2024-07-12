import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ClientList from './screens/ClientList/client-list'
import DadJokes from './screens/DadJokes/dad-jokes'
import NavBar from './components/NavBar/nav-bar'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/clientlist" element={<ClientList />} />
          <Route path="/dadjokes" element={<DadJokes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
