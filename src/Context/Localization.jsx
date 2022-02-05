import React from 'react'

const Context = React.createContext()

function Provider({children}) {
    
    const [contexts, setContexts] = React.useState('en')
    
    return <Context.Provider value={{contexts, setContexts}}>
        {children}
    </Context.Provider>
}

export { Context, Provider}