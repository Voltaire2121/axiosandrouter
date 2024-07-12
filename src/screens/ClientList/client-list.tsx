import useClients from '../../hooks/useClients'
import './client-list.css'

const ClientList = () => {
  const { clients } = useClients()
  return (
    <div className="client-list-main">
      <h1>Client List</h1>
      <div className="central-div">
        <div className="side-div">
          {clients.length > 0 && (
            <ul>
              {clients.map((client) => (
                <ul key={client.id}>{`Client Name: ${client.name}`}</ul>
              ))}
            </ul>
          )}
        </div>
        <div className="side-div">
          {clients.length > 0 && (
            <ul>
              {clients.map((client) => (
                <ul key={client.id * 5}>{`Username: ${client.username}`}</ul>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClientList
