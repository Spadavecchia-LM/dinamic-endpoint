import axios from "axios";
import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const Context = ({children}) => {

    const initialValue = {
        url: "https://jsonplaceholder.typicode.com/users/",
        data: []
    }
    const reducer = (state, action) => {
        switch(action.type){
            case "GET_USER":
                return {...state, data: [action.payload]}
        }
    }

    

    
    const [state, dispatch] = useReducer(reducer, initialValue)
    
 
    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default Context