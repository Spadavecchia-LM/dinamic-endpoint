import { useContext, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { GlobalContext } from './Context/Context'
import Card from './components/Card'

function App() {
 
  const {state, dispatch} = useContext(GlobalContext)
  const [endpoint, setEndpoint] = useState("")

  
  const handleChange = (e) => {
    setEndpoint(e.target.value)


  }
  const handleSearch = () => {
    if (endpoint !== "") {
      axios(`${state.url}${endpoint}`)
        .then(response => dispatch({ type: "GET_USER", payload: response.data }))
        .catch(error => {
          // Manejar errores, por ejemplo, dispatch un error al estado global
          console.error("Error al buscar usuario:", error);
        });
    }
  };

console.log(state)
  
  return (
 <>
    <input type="search" name="search" placeholder='buscar por id' onChange={handleChange} />
    <select name="username">
      <option value="" disabled > seleccione un usuario</option>
      {state.users.map(u => {
        return(
          <option key={u.id} value={u.name}> {u.name} </option>
        )
      })}
    </select>
    <button  onClick={handleSearch}>buscar</button>
    <Card/>
 </>
  )
}

export default App
