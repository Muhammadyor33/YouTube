import React from "react";

const Context = React.createContext()

function Provider({children}) {

    const [ more, setMore ] = React.useState(true)

    return (
        <Context.Provider value={{more, setMore}}>
            {children}
        </Context.Provider>
    )
}
export { Provider, Context }