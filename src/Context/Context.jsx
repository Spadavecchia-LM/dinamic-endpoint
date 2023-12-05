import axios from "axios";
import { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext()

const Context = ({children}) => {

    const initialValue = {
        url: "https://jsonplaceholder.typicode.com/users/",
        data: {},
        users: []
    }
    const reducer = (state, action) => {
        switch(action.type){
            case "GET_USER":
                return {...state, data: action.payload}
            case "GET_USERS":
                return {...state, users: action.payload}
        }
    }

    useEffect(() => {
        axios(state.url)
        .then(response => dispatch({type:"GET_USERS", payload: response.data}))
      },[])

      
      
      
      const [state, dispatch] = useReducer(reducer, initialValue)
      
      console.log(state.users)
 
    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default Context