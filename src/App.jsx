import { useContext, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { GlobalContext } from './Context/Context'

function App() {
 
  const {state, dispatch} = useContext(GlobalContext)
  const [endpoint, setEndpoint] = useState("")
  
  const handleChange = (e) => {
    setEndpoint(e.target.value)
  }

  useEffect(() => {
    axios(`${state.url}${endpoint}`)
    .then(response => dispatch({type:"GET_USER", payload: response.data}))
},[endpoint != ""])

  console.log(state.data)
  
  return (
 <>
    <input type="search" name="search" placeholder='buscar por id' onBlur={handleChange} />
    <button>buscar</button>
 </>
  )
}

export default App
