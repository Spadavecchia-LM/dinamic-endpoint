import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Context'

const Card = () => {

    const {state} = useContext(GlobalContext)


  return (
    <>
    <div> id: {state.data.id} {state.data.name} {state.data.username}</div>
    </>
  )
}

export default Card