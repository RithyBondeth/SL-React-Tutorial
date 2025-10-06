import { createContext } from "react"

/*
    - useContext() Hook is a react hook that allows you to access data from any component with explicitly passing 
      it down through props at any level.
    - We can say useContext() is used to manange global data in React App.
*/

export const AppContext = createContext()

export default function ContextProvider(props) {

    const phone = "085872582"
    const name = "Bondeth"

    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
} 